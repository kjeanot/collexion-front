import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setCollectionImage } from '../../store/reducers/collectionsReducer';
import { useAppDispatch } from '../../hooks/redux';

function CloudinaryUploadWidget({ uwConfig, setPublicId }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Check if the script is already loaded
    if (!loaded) {
      const uwScript = document.getElementById('uw');
      if (!uwScript) {
        // If not loaded, create and load the script
        const script = document.createElement('script');
        script.setAttribute('async', '');
        script.setAttribute('id', 'uw');
        script.src = 'https://upload-widget.cloudinary.com/global/all.js';
        script.addEventListener('load', () => setLoaded(true));
        document.body.appendChild(script);
      } else {
        // If already loaded, update the state
        setLoaded(true);
      }
    }
  }, [loaded]);

  const initializeCloudinaryWidget = () => {
    if (loaded) {
      const myWidget = window.cloudinary.createUploadWidget(
        uwConfig,
        (error, result) => {
          if (!error && result && result.event === 'success') {
            console.log('Done! Here is the image info: ', result.info);
            setPublicId(result.info.public_id);
            dispatch(setCollectionImage(result.info.secure_url));
          }
        }
      );

      document.getElementById('upload_widget').addEventListener(
        'click',
        function () {
          myWidget.open();
        },
        false
      );
    }
  };

  const dispatch = useAppDispatch();

  return (
    <button
      id="upload_widget"
      className="text-white bg-neutral font-semibold rounded-lg text-base px-3 py-2 my-6 mb-2 max-w-56"
      onClick={(evt) => {
        evt.preventDefault();
        initializeCloudinaryWidget();
      }}
    >
      Télécharger une image
    </button>
  );
}

export default CloudinaryUploadWidget;

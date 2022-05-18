import React from "react";
import PropTypes from "prop-types";
import defaultAvatar from '../images/kawaiiAvatar.gif';


function GetAvatar(props) {
    const fr = new FileReader();
    const myFileField = React.createRef();

    const uploadImage = (ev) => {
    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];
      fr.addEventListener("load", getImage);
      fr.readAsDataURL(myFile);
    }
  };

  const getImage = () => {
    const image = fr.result;
    props.updateAvatar(image);
  };

  const avatar = props.avatar === "" ? defaultAvatar : props.avatar;
  return (
      
    <div>
      <div className="false-stuffed">
        <label className="false-stuffed__false-button" htmlFor="photo">
          Añadir imagen
          <input
            type="file"
            ref={myFileField}
            className="get-avatar__upload"
            onChange={uploadImage}
            name="photo"
            id="photo"
          />
        </label>
        <div
          className="get-avatar__preview"
          style={{ backgroundImage: `url(${avatar})` }}
        ></div>
      </div>
    </div>
  );
}


GetAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  updateAvatar: PropTypes.func.isRequired,
};

export default GetAvatar;
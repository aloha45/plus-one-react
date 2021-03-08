import React from 'react';
import { Formik, useFormik } from 'formik';
import './ProfilePage.css';

const ProfilePage = (props) => {
    const formik = useFormik({
        initialValues: {
            picture: "",
        },
        onSubmit: values => {
            props.handleUpdatePic(values.picture)
        }
    })

    // function handleSubmit(picture) {
    //     props.handleUpdatePic(picture)
    //     console.log('hi')
    // }
    return ( 
        <React.Fragment>
            <div role="presentation/none" className="profile-container">
                <div role="presentation/none" className="profile-card">
                    {props.user.picture ? <img src={props.user.picture} /> : <p>Upload a profile picture!</p>}
                    <p className="username">{props.user.name}'s Profile</p>
                    <p className="user-details">Email: {props.user.email}</p>
                    <p className="user-details">You have {props.user.yepArr.length} matches!</p>
                    </div>
                <div role="presentation/none" className="profile-card">
                    <p className="username">Update Profile Pic</p>
                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor="picture">Paste a link to your image here</label>
                        <input
                            id="picture"
                            name="picture"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.picture} />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default ProfilePage;

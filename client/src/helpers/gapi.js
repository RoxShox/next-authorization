import jwt_decode from 'jwt-decode'
import { useState } from 'react'
export default function gapi(google, btnRef, setState) {

    function googleCallback(res) {
        const user = jwt_decode(res.credential)
        return setState(user)  
    }
    google.accounts.id.initialize({
        client_id: "480864807133-r37dumtbb7vcgj62pcs29833phk2opck.apps.googleusercontent.com",
        callback: googleCallback  
    })
    google.accounts.id.renderButton(
        btnRef,
        {size: "large"}
    )
    console.log(`Google init`)

} 

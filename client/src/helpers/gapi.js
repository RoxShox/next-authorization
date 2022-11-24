
export default function gapi(google, btnRef) {
    function googleCallback(res) {
        console.log(`Google res: ${res}`)
    }
    google.accounts.id.initialize({
        client_id: "480864807133-r37dumtbb7vcgj62pcs29833phk2opck.apps.googleusercontent.com",
        callback: googleCallback  
    })
    google.accounts.id.renderButton(
        btnRef.current,
        {theme: "outline", size: "large"}
    )
    console.log(`Google init`)
} 
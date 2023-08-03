//contact Send email


function SendMail(event) {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const mobile = document.getElementById("mobile");
    const message = document.getElementById("message");
    event.preventDefault();
    if (name.value === "") {
        alert("please fill the name");
    } else if (email.value === "") {
        alert("please fill email address");
    } else if (mobile.value === "") {
        alert("please fill the mobile number");
    } else if (message.value === "") {
        alert("please fill atleast 10 words")
    } else {
        var params = {
            from_name: name.value,
            email_id: email.value,
            mobile_no: mobile.value,
            message: message.value
        }
        emailjs.send("service_jgawk9s", "template_bs73s3k", params).then(function(res) {
            alert("Sent Successfully 😇 " + res.status);
        })
    }

    console.log(params);
}
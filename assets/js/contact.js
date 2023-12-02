const btnSendMessage = document.querySelector(".btn-send-message");
btnSendMessage.addEventListener("click", function(e) {
    e.preventDefault();
    const fullname = document.querySelector(".fullname"),
    phone = document.querySelector(".phone"),
    email = document.querySelector(".email"),
    message = document.querySelector(".message");
    let messageShow = "";
    let isValid = true;
    if(fullname.value === "") {
        messageShow += "<p>	Bạn vui lòng nhập họ tên</p>";
        isValid = false;
    }
    if(phone.value === "") {
        messageShow += "<p>	Bạn vui lòng nhập số điện thoại</p>";
        isValid = false;
    } else
    if(!phone.value.match(/^[0][0-9]{9}$/)) {
        messageShow += "<p>	Sai số điện thoại</p>";
        isValid = false;
    }
    if(email.value === "") {
        messageShow += "<p>	Bạn vui lòng nhập email</p>";
        isValid = false;
    } else
    if(!email.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        messageShow += "<p>Sai địa chỉ email</p>";
        isValid = false;
    }
    if(message.value === "") {
        messageShow += "<p>	Bạn vui lòng nhập nội dung chi tiết</p>";
        isValid = false;
    }
    if(isValid) {
        document.querySelector(".btn-reset").click();
        messageShow = "<p>Bạn đã gửi thư thành công, chúng tôi sẽ liên hệ với bạn sớm nhất, cảm ơn bạn đã quan tâm</p>";
    }
    document.querySelector(".box-show-message").innerHTML = messageShow;
})
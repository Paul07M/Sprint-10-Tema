document.addEventListener('DOMContentLoaded', (onClickSubmit) => {
    const form = document.getElementById('emailForm');

    form.addEventListener('submit', function (onClickSubmit) {
        onClickSubmit.preventDefault();

        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;
        const mail = document.getElementById("mail").value;

        const newData = {
            fname: fname,
            lname: lname,
            mail: mail,
        };

        console.log(newData);

        alert(`Un e-mail a fost trimis la adresa: ${mail}. Va multumesc!`);

    });
}); 
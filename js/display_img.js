const image_input=document.querySelector("#id_org_form-logo");
var uploaded_image="";

image_input.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        document.querySelector("#display-img").style.backgroundImage = 'url(' + uploaded_image + ')';
    });
    reader.readAsDataURL(this.files[0]);
})
class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }
    createForm() {
        let form = document.getElementById("formBox");
        let html = "";
        this.fields.forEach(f => {
            html += "<label>" + f.label + "</label>";
            html += "<input type='" + f.type + "' id='" + f.label + "'>";
        });
        html += "<button id='submitBtn'>Submit</button>";
        form.innerHTML = html;
        document.getElementById("submitBtn").addEventListener("click", () => {
            console.log(this.getFormData());
        });
    }
    getFormData() {
        let data = {};
        this.fields.forEach(f => {
            data[f.label] = document.getElementById(f.label).value;
        });
        return data;
    }
}
let fb = new FormBuilder([
    { type: "text", label: "Username" },
    { type: "email", label: "Email" }
]);
fb.createForm();
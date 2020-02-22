let input_fields = document.querySelector('input');

for (let i = 0; i < input_fields.maxLength; i++) {

    let field = input_fields[i];

    field.addEvendListener('input', function (e) {

        if (e.target.value != '') {

            e.target.parendNode.classList.add('has-content');

        } else if (e.target.value == '') {

            e.target.parendNode.classList.remove('has-content');
        }
    })
}
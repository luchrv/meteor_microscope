accountsUIBootstrap3.setLanguage('es');
Accounts.ui.config({
    requestPermissions: {},
    extraSignupFields: [{
        fieldName: 'first-name',
        fieldLabel: 'Nombre',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
            if (!value) {
                errorFunction("Por favor escriba su nombre");
                return false;
            } else {
                return true;
            }
        }
    }, {
        fieldName: 'last-name',
        fieldLabel: 'Apellido',
        inputType: 'text',
        visible: true,
    }, {
        fieldName: 'gender',
        showFieldLabel: false, // If true, fieldLabel will be shown before radio group
        fieldLabel: 'Sexo',
        inputType: 'radio',
        radioLayout: 'vertical', // It can be 'inline' or 'vertical'
        data: [{ // Array of radio options, all properties are required
            id: 1, // id suffix of the radio element
            label: 'Hombre', // label for the radio element
            value: 'm' // value of the radio element, this will be saved.
        }, {
            id: 2,
            label: 'Mujer',
            value: 'f'
        }],
        visible: true
    }, {
        fieldName: 'country',
        fieldLabel: 'País',
        inputType: 'select',
        showFieldLabel: true,
        empty: 'Por favor seleccione su país de residencia',
        data: [{
            id: 1,
            label: 'Colombia',
            value: 'co'
        }, {
            id: 2,
            label: 'Ecuador',
            value: 'ec',
        }, {
            id: 3,
            label: 'Estados Unidos',
            value: 'us',
        }, {
            id: 4,
            label: 'Perú',
            value: 'pe',
        }, {
            id: 5,
            label: 'Venezuela',
            value: 've',
        }],
        visible: true
    }, {
        fieldName: 'terms',
        fieldLabel: 'Acepto los <a href="#">terminos y condiciones</a>',
        inputType: 'checkbox',
        visible: true,
        saveToProfile: false,
        validate: function(value, errorFunction) {
            if (value) {
                return true;
            } else {
                errorFunction('Debe aceptar los terminos y condiciones.');
                return false;
            }
        }
    }]
});

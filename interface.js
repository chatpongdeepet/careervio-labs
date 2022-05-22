interface OS {
    name: String;
    language: String;
}

let OperatingSystem = (type: OS): viod => {
    console.log(`Andriod ` + type.name + ' has ' + type.language + `language.`);
};
let Oreo = {name: 'O', language: 'Java'}
OperatingSystem(Oreo);

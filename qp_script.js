function generateQPText() {
    const firstName = document.getElementById("firstName").value || "Nil";
    const lastName = document.getElementById("lastName").value || "Nil";
    const age = document.getElementById("age").value || "Nil";
    const address = document.getElementById("address").value || "Nil";
    const occupation = document.getElementById("occupation").value || "Nil";

    // Get selected license (only one allowed due to radio buttons)
    let license = "Nil";
    document.querySelectorAll('input[name="license"]:checked').forEach(choice => {
        license = choice.value;
    });

    // Get selected other licenses (multiple allowed)
    let otherLicenses = [];
    document.querySelectorAll('input[name="otherLicenses"]:checked').forEach(choice => {
        otherLicenses.push(choice.value);
    });

    const flags = document.getElementById("flags").value || "Nil";

    let allLicenses = [];
    if (license !== "Nil") {
        allLicenses.push(license); // Ensure only one license is included from main group
    }
    if (otherLicenses.length > 0) {
        allLicenses = allLicenses.concat(otherLicenses); // Add other licenses (3 and 6)
    }

    const output = `~y~First Name:~b~${firstName} ~y~Last Name:~b~${lastName} ~y~Age:~b~${age} ~y~Address:~b~${address} ~y~Occupation:~b~${occupation} ~y~Licenses:~b~${allLicenses.length > 0 ? allLicenses.join(", ") : "Nil"} ~y~Flags:~b~${flags}`;

    document.getElementById("output").innerText = output;
    document.getElementById("output").style.display = "block"; // Ensure output is visible
}

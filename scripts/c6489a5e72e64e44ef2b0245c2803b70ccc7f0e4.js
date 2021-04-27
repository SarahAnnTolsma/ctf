function transform(text)
{
    text = text.toLowerCase();

    let hash = [ ];

    for (let i = 0; i < text.length; i += 4)
    {
        let x = (text.charCodeAt(i + 0)      ) |
                (text.charCodeAt(i + 1) <<  8) |
                (text.charCodeAt(i + 2) << 16) |
                (text.charCodeAt(i + 3) << 24);

        hash.push(x.toString(16).padStart(8, "0"));
    }

    return hash.join("-");
}

function validate()
{
    let password = document.getElementById("password");

    let transformed = transform(password.value);
    if (transformed === "20776f6e-72276577-6f632065-6e696b6f-00000067")
    {
        redirect(password.value);
    }
    else
    {
        alert("Sorry, that's not correct. Please try again.");
    }
}
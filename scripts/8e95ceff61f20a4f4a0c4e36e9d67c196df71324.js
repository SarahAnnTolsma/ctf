let magic = [ 5, 8, 13, 21, 34 ];
let reference = [ { a: -10 }, { g: 22 }, { p: 130 }, { n: 1.75 }, { v: 3.09 } ];

function activate()
{
    let key = document.getElementById("key");
    let keyValid = false;

    let parts = key.value.split("-");
    if (parts.length === 5)
    {
        try
        {
            let fns = parts.map(generate);
            let out = [ { }, { }, { }, { }, { } ];

            for (let i = 0; i < 5; i++)
            {
                fns[i](magic[i], out[i]);
            }

            keyValid = validate(out);
        }
        catch (e)
        {
        }
    }

    if (keyValid)
    {
        redirect(key.value);
    }
    else
    {
        alert("Your key is not valid. Please try again. If you're having trouble, please contact AcmeSuite Support.");
    }
}

function generate(text)
{
    if (text.length !== 4 || !/^[a-z]b[2-9][a-f]$/.test(text))
    {
        return function() { };
    }

    return new Function(
        text.substr(0, 1),
        text.substr(1, 1),
        atob("JXNbMV1bIiVzWzBdIl09ZXZhbCglc1swXStvcGVyYXRvcigiJXNbMV0iLCIlc1syXSIpKzB4JXNbM10p").replace(
            /%s\[(\d)\]/g,
            (_, m) => text[parseInt(m)])
    );
}

function operator(a, b)
{
    return String.fromCharCode(a.charCodeAt(0) - b.charCodeAt(0));
}

function validate(key)
{
    for (let n = 0; n < reference.length; n++)
    {
        let properties = Object.keys(reference[n]);
        let property = properties[0];

        if (key[n][property].toFixed(2) !== reference[n][property].toFixed(2))
        {
            return false;
        }
    }

    return true;
}
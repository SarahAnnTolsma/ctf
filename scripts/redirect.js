function redirect(input)
{
    // NOTE: THIS FILE IS NOT RELATED TO ANY CAPTURE-THE-FLAG EXERCISE.
    // IT IS JUST HERE TO REDIRECT TO THE NEXT CHALLENGE WHEN THE CORRECT INPUT
    // HAS BEEN ENTERED. YOU WILL FIND NO SOLUTION HERE.

    // I PROMISE.

    // Sanitize input
    input = input.replace(/[^a-z0-9_-]/gi, "");

    // Generate the SHA-1 hash of the input
    let subtle = crypto.subtle;
        subtle.digest("SHA-1", new TextEncoder().encode(input))
            .then(
                function(hash)
                {
                    // Map to a hexadecimal string, and navigate.
                    hash = Array.from(new Uint8Array(hash))
                                .map(n => n.toString(16).padStart(2, "0"))
                                .join("");

                    location.href = hash + ".html";
                });
}

function sha1(input)
{
    
}
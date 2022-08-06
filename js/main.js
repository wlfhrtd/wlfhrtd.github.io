// style---------------------------------------
const PADDING = "  ";

function glow(text) {
    return "[[g;#EEEEEE;]" + text + "]";
}

function green(message) {
    return "[[gb;green;black]" + message + "]";
}

function red(message) {
    return "[[gb;red;black]" + message + "]";
}
// --------------------------------------------

// utils----------------------------------------------------------------
function downloadURI(uri, name) {
    const link = document.createElement("a");
    link.download = name;
    link.href = uri;
    link.click();
}

function getAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
// ----------------------------------------------------------------------

// content--------------------------------------------------------------------------------------------------------------------------------------
const messages = {
    repo: `
${PADDING} https://github.com/wlfhrtd
`,
    help: `
${PADDING}${glow("about")}              > cool story
${PADDING}${glow("projects")}           > Projects I've made
${PADDING}${glow("skills")}             > Main technologies I'm experienced in 
${PADDING}${glow("repo")}               > Github link
${PADDING}${glow("download_cv")}        > Resume in pdf file
${PADDING}${glow("contact")}            > Only email and telepathy currently
${PADDING}${glow("credits")}            > let me speak from my heart
${PADDING}${glow("all")}                > yolo
${PADDING}${glow("clear")}              > Clear terminal
`,
    about: `
${PADDING}${red("*** CLASSIFIED INFORMATION - INCINERATE AFTER FINDING ***")}
or do not.
They are watching anyway.

Name is ${glow("Sergei Sedykh")}.
I'm a ${getAge("1990/07/17")} year old self-educated ${glow("Programmer and Web/Software Developer")} from Kursk, Russia.
I did science in past - ${glow("physics")} to be precise. Conferences, research projects, studies - all of that.
But failed to invent how to synthesize food out of air and had to start doing real jobs.

Nowadays I pursue Web and Software development being focused on looking for my first job in this field.
 
If you're interested I am open to discuss any opportunities.
My email can be found by typing ${glow("'contact'")}.
Also you can check out my CV by typing ${glow("'download_cv'")}.
`,
    projects: `
${PADDING} https://github.com/wlfhrtd/DesignPatterns

${PADDING} https://github.com/wlfhrtd/HttpClient-abstraction-demo

${PADDING} https://github.com/wlfhrtd/ASP.NET-Data-Validation

${PADDING} https://github.com/wlfhrtd/ASP.NET-MVC-demo

${PADDING} https://github.com/wlfhrtd/ADO.NET-demo

${PADDING} https://github.com/wlfhrtd/EF-DAL

${PADDING} https://github.com/wlfhrtd/AutoLot

${PADDING} https://github.com/wlfhrtd/libxml2_wrapper

${PADDING} https://github.com/wlfhrtd/html_tags_parser

${PADDING} https://github.com/wlfhrtd/not_project

${PADDING} https://github.com/wlfhrtd/large_file_iterator

${PADDING} https://github.com/wlfhrtd/assistant
`,
    skills: `
${PADDING}${green(".NET")}
${PADDING}${green("Java Android")}
${PADDING}${green("PHP")}
${PADDING}${green("JavaScript")}
${PADDING}${green("C++")}
${PADDING}${green("Web Dev")}
${PADDING}${green("OOP model")}
`,
    contact: `
${PADDING}${glow("Email")}              > strmbld@gmail.com
`,
    credits: `
${PADDING}Site made by ${green("bunch of cats running over keyboard")}
${PADDING}Using ${green("JQuery Terminal Emulator")} by ${green("Jakub Jankiewicz")} (https://terminal.jcubic.pl)
`,
};

let banner = glow("Microsoft Windows XP [Version 5.1.2600&#93;\n&lt;C&gt; Copyright 1985-2001 Microsoft Corp.\n\nC:\\Windows\\System32> ");
banner += "help\n";
banner += messages.help;

let welcomeMessage = "Hello there.\n" +
    "Yeah, they usually ask you " + green('"Type \'help\' to view a list of available commands"') + '\n' +
    "or something like that.\n" +
    "But this time our AI have generously done it for you, no worries.\n"+
    "We'll send you bill for payment via mail. Hava a nice day.\n\n"
;

const commands = {
    help: function () {
        this.echo(messages.help);
    },

    repo: function () {
        this.echo(messages.repo);
    },

    about: function () {
        this.echo(messages.about);
    },

    projects: function () {
        this.echo(messages.projects);
    },

    skills: function () {
        this.echo(messages.skills);
    },

    contact: function () {
        this.echo(messages.contact);
    },

    credits: function () {
        this.echo(messages.credits);
    },

    download_cv: function () {
        downloadURI(
            "downloads/sergei-sedykh-resume.pdf",
            "sergei-sedykh-resume.pdf"
        );
    },

    all: function () {
        this.clear();
        this.exec("about");
        this.exec("projects");
        this.exec("skills");
        this.exec("repo");
        this.exec("contact");
        this.exec("credits");
    },

    clear: function () {
        this.clear();
        this.echo(banner);
    },
};
// ------------------------------------------------------------------------------------------------------------------------------------------------------------

// jquery terminal--------------------------------------------------------------------
$(function () {
    let isTyping = false;
    function typed(finish_typing) {
        return function (term, message, delay) {
            isTyping = true;
            let prompt = term.get_prompt();
            let c = 0;
            if (message.length > 0) {
                term.set_prompt("");
                let interval = setInterval(function () {
                    term.insert(message[c++]);
                    if (c === message.length) {
                        clearInterval(interval);
                        // execute in next interval
                        setTimeout(function () {
                            // swap command with prompt
                            finish_typing(term, message, prompt);
                            isTyping = false;
                        }, delay);
                    }
                }, delay);
            }
        };
    }

    let typed_message = typed(function (term, message, prompt) {
        term.set_command("");
        term.echo(message);
        term.set_prompt(prompt);
    });

    $("body").terminal(commands, {
        greetings: banner,
        prompt: glow("C:\\Windows\\System32> "),
        completion: true,
        checkArity: false,
        clear: false,

        onInit: function (term) {
            typed_message(term, welcomeMessage, 0);
        },
    });
});

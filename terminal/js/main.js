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
${PADDING}https://github.com/wlfhrtd
`,
    help: `
${PADDING}${glow("about")}              > cool story
${PADDING}${glow("projects")}           > Projects I've made
${PADDING}${glow("skills")}             > Main technologies I'm experienced with
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
${PADDING}${green("****************** C# ******************")}

${PADDING}${glow("Design Patterns using .NET")}

${PADDING}Link: https://github.com/wlfhrtd/DesignPatterns

${PADDING}Description:
Currently working on it, haven't decided yet - should it be full-blown manual
or just handbook. At this moment project contains code examples for understanding
of design patterns.
Used in another project.

${PADDING}${glow(".NET HttpClient demo")}

${PADDING}Link: https://github.com/wlfhrtd/HttpClient-abstraction-demo

${PADDING}Description:
Demo project of working with .NET Http Client abstraction consuming API (also included).

${PADDING}Used:
AspNetCore.Http.Extensions
AspNetCore.JsonPatch
AutoMapper
Marvin.StreamExtensions
Moq
Newtonsoft.Json
Swashbuckle
xunit
NSwagStudio

${PADDING}${glow("Data Validation in ASP.NET")}

${PADDING}Link: https://github.com/wlfhrtd/ASP.NET-Data-Validation

${PADDING}Description:
Data validation approaches available in ASP.NET.

${PADDING}Used:
FluentValidation.AspNetCore

${PADDING}${glow("ASP.NET MVC demo")}

${PADDING}Link: https://github.com/wlfhrtd/ASP.NET-MVC-demo

${PADDING}Description:
Web application based on ASP.NET MVC demonstrating available in framework techniques (not all of course)
like TagHelpers, Areas, ViewComponents etc.

${PADDING}Used:
LibraryManager
LigerShark.WebOptimizer
Serilog
SqlClient

${PADDING}${glow("ADO.NET demo")}

${PADDING}Link: https://github.com/wlfhrtd/ADO.NET-demo

${PADDING}Description:
'Showcase' of ADO.NET data access technology from .NET Framework.

${PADDING}Used:
Npgsql

${PADDING}${glow("AutoLot project")}

${PADDING}Link: https://github.com/wlfhrtd/AutoLot

${PADDING}Description:
Introduction to ASP.NET provided by Troelsen A. with "Pro C# 9 with .NET 5 (10th edition)".

${PADDING}Used:
AutoMapper
EntityFrameworkCore
LibraryManager
Serilog
Swashbuckle
WebOptimizer

${PADDING}${green("****************** C++ ******************")}

${PADDING}${glow("SimplePasswordManager")}

${PADDING}Link: https://github.com/wlfhrtd/SimplePasswordManager

${PADDING}Description:
Password manager application based on Master Password concept. 

${PADDING}Used:
Qt Quick(QML) framework
Qt-AES - https://github.com/bricke/Qt-AES

${PADDING}${glow("TranslateBar")}

${PADDING}Link: https://github.com/wlfhrtd/TranslateBar

${PADDING}Description:
Desktop-oriented widget application for convenient access to Google Translate service. 

${PADDING}Used:
Qt Quick(QML) framework

${PADDING}${glow("libxml2 wrapper")}

${PADDING}Link: https://github.com/wlfhrtd/libxml2_wrapper

${PADDING}Description:
Application to extract data encased between html tags. 

${PADDING}Used:
libiconv
libxml2

${PADDING}${glow("HTML data retriever")}

${PADDING}Link: https://github.com/wlfhrtd/html_tags_parser

${PADDING}Description:
Application to extract data encased between html tags using regular expressions and replace functions.

${PADDING}Used:
regex

${PADDING}${green("****************** PHP ******************")}

${PADDING}${glow("Sales CMS for some shop")}

${PADDING}Link: https://github.com/wlfhrtd/not_project

${PADDING}Preview link: https://obscure-chamber-99444.herokuapp.com/

${PADDING}Description:
Based on ordinary trading software but became sandbox for Symfony framework.

${PADDING}Used:
php 8.1
symfony 6.1
doctrine orm 2.12

easyadmin 4
liip/imagine
phpoffice/phpspreadsheet
stof/doctrine-extensions
symfony/amqp-messenger
symfony/doctrine-messenger
symfony/lock
symfony/messenger
symfony/notifier
symfony/telegram-notifier
symfony/security
symfony/twig
symfony/validator
tetranz/select2entity
vich/uploader
doctrine/doctrine-fixtures
symfony/maker-bundle
symfony/web-profiler

${PADDING}${glow("File Iterator")}

${PADDING}Link: https://github.com/wlfhrtd/large_file_iterator

${PADDING}Description:
PHP fgets(), fread(), fgetcsv() functions wrapper

${PADDING}${green("****************** Java Android ******************")}

${PADDING}${glow("Assistant organizer app")}

${PADDING}Link: https://github.com/wlfhrtd/assistant

${PADDING}Description:
Organizer application using Calendar View and Work Manager.

${PADDING}Used:
Navigation component
Room database component
WorkManager api
`,
    skills: `
${PADDING}${green("C#")} (.NET)
${PADDING}${green("Java Android")}
${PADDING}${green("PHP")} (native, Symfony)
${PADDING}${green("JavaScript")} (native, jQuery)
${PADDING}${green("C++")} (native, STL, Qt Core, Qt Widgets, Qt Quick)
${PADDING}${green("Web Development")}
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
            "../downloads/sergei-sedykh-resume.pdf",
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

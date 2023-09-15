# Wrap with a div plugin for tinyMCE6 in processwire

Tiny template plugin allows you to do far more but ometimes you have already written a long text and would just like to highlight some content, putting it in a nice background with a fancy left border, and so on, this could help you a little

to install it in pw, put the js file where you want, e.g. /site/modules/tinymce (up to you)
then go to modules -> configure -> InputfieldTinyMCE

![module_choosetiny](https://github.com/virtualgadjo/pw-tinymce-div-plugin/assets/13590/c92aeba3-3e74-46a4-8b4c-cd4523ea91d2)

and add the file path in the External plugin files textarea and save

![register_plugin](https://github.com/virtualgadjo/pw-tinymce-div-plugin/assets/13590/bb84c29d-8e1d-4cac-8ed1-6aa2de8797fb)

now, in the field you want to use it, input tab, enable the plugin

![enable_plugin](https://github.com/virtualgadjo/pw-tinymce-div-plugin/assets/13590/00f49b2d-1b84-405d-bc6d-2f5fdcb9a8ac)

and add it to the toolbar (using the select list or simply writing its name in the input and hit enter)
i add a little css in the custom css textarea, it helps but it's up to you

![default_style](https://github.com/virtualgadjo/pw-tinymce-div-plugin/assets/13590/63298f22-cf9b-45a7-b04c-6417ec1c8fef)

now you should see a new button

![button](https://github.com/virtualgadjo/pw-tinymce-div-plugin/assets/13590/e9a6824d-c488-45b1-ac06-4a293c53898d)

in your tinyMCE toolbar, tu use it, just select the content you need, hit the button and you'll see the result

something that may also be useful, if you hit the button without selecting anything before, it will simply create a div with an empty p inside

TinyMCE automatically adds an empty p after the div, probably to help you write outside of it if it were the last element of the content, of course you can delete it with a simple Enter or (what i always do even without this plugin) using pw tiny option that will delete ampty p's after saving

![markup_toggle](https://github.com/virtualgadjo/pw-tinymce-div-plugin/assets/13590/af6fb8cf-b890-41aa-abab-f59a3ae2116c)

---
Of course, you can modify whatever you want in the plugin code, remove the div class (just here to help seeing the result and select it afterwards to change its class as you can add as many div.ziclass {} in the css textarea), change or remove the text in the toolbar (leave empty single quotes), change or remove the tooltip (here you can simply delete the line)...

long story short, do whatever you want and need with it :)

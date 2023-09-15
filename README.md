# Wrap with a div plugin for tinyMCE6 in processwire

Tiny template plugin allows you to do far more but sometimes you have already written a long text and would just like to highlight some content, putting it in a nice background with a fancy left border, and so on, this could help you a little

to install it in pw, put the js file where you want, e.g. /site/modules/tinymce (up to you)
then go to modules -> configure -> InputfieldTinyMCE

![module_choosetiny](https://github.com/virtualgadjo/pw-tinymce-div-plugin/assets/13590/38987332-2b47-466a-95b1-be77bd2dcc8f)

and add the file path in the External plugin files textarea and save

![register_plugin](https://github.com/virtualgadjo/pw-tinymce-div-plugin/assets/13590/f1e0aaae-7178-4474-afaf-82a370584932)

now, in the field you want to use it, input tab, enable the plugin

![enable_plugin](https://github.com/virtualgadjo/pw-tinymce-div-plugin/assets/13590/c3fe4337-5745-45ae-a3c2-ad8f49384ce2)

and add it to the toolbar (using the select list or simply writing its name in the input and hit enter)
i add a little css in the custom css textarea, it helps but it's up to you

![default_style](https://github.com/virtualgadjo/pw-tinymce-div-plugin/assets/13590/18a0cd16-789a-4449-9fa2-336c53a31d19)

now you should see a new button

![button](https://github.com/virtualgadjo/pw-tinymce-div-plugin/assets/13590/896cbccb-1a76-423f-890a-71a00eb1f793)

in your tinyMCE toolbar, tu use it, just select the content you need, hit the button and you'll see the result

something that may also be useful, if you hit the button without selecting anything before, it will simply create a div with an empty p inside

TinyMCE automatically adds an empty p after the div, probably to help you write outside of it if it were the last element of the content, of course you can delete it with a simple Enter or (what i always do even without this plugin) using pw tiny option that will delete empty p's after saving

![markup_toggle](https://github.com/virtualgadjo/pw-tinymce-div-plugin/assets/13590/23e5167a-b936-4d58-b9a4-99ceabe79cd9)

---
Of course, you can modify whatever you want in the plugin code, remove the div class (just here to help seeing the result and select it afterwards to change its class (as you can add as many div.ziclass {} you want in the css textarea), change or remove the text in the toolbar (leave empty single quotes), change or remove the tooltip (here you can simply delete the line)...

long story short, do whatever you want and need with it :)

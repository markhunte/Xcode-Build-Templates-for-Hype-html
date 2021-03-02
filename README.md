# Xcode-Build-Templates-for-Hype-html

<hr>
<div  style='background-color: #ddffdd'><strong>Thank You for your kind donation:</strong></div> 
 <img width="118" alt="djon1" src="https://user-images.githubusercontent.com/6317734/109690714-8b69e200-7b7e-11eb-8fac-cb2cabe6abba.png">

<hr>





Xcode Build Templates to drag n drop your [Tumult Hype](https://tumult.com/ )  - HTML into for App creation




**Xcode Templates **


Xcode templates are what you normally use to start a new Xcode project.

As shown here with the standard template builds.


![](https://forums.tumult.com/uploads/db2156/original/3X/6/6/66730525048e6caf93e9c4c2cff83f18ca15dca4.jpeg)

But it is possible to create you own Custom Templates. Sadly it is not massively documented on how to do this in Xcode.

Most info you can find on web derives from people examining the official Apple templates inside the Xcode App’s package contents. Pretty much what I also did after reading some of them.

There are a few example on the web that can help anyone to get started in their investigation and it will be just that trust me..

For now this post is not about how to create them but mainly how to use the ones I have created. Doing otherwise would be very in-depth and my brain and yours may melt if I try to go over it all…

.. ok I am back. I just had to go and put my head in the fridge just thinking about it.

What we do have here for this post is a couple of Templates I created that allows you to add your html exports to an Xcode project with some of the base Swift code already written.

It is by no means the be all and end all and likely in a part two I will go over some basics on how to edit a template to customise it with your own code.

---


**Installing the templates.**

Installing the template is very simple.

Un zip the templates. from your download You should have a new folder called **Hype iOS drop files**

The open a new finder window and navigate to

**~/Library/Developer/Xcode/**

Inside the **~/Library/Developer/Xcode/** folder if you do not have a folder named **Templates** then add a new folder and name it **Templates**

Drag and Drop the newly unzipped **Hype iOS drop files** folder into it.

If Xcode is running quit and relaunch it.

---

Our custom templates should now be in the *iOS* **Xcode Choose Template dialogue** likely at the bottom.

![](https://forums.tumult.com/uploads/db2156/original/3X/f/f/ff59e4db6a243919acc6413eeaa69a6eb90b9446.jpeg)￼

Both templates are based on an iOS Single View App and use a **WKWebView** , created and linked programatically and not via IB.

**Important note: Although you see the lovely Tumult Hype Icons. These are NOT official Tumult Hype templates.**

*Tumult kindly allowed me to use their icons but that is where any hand in their creation ends and they hold no responsibility for their use or any support of them.*

*As usual with things like this, these are offered as is and you use them at your own discretion/risk.*

*You are responsible for using them.*

*I may or may not help anyone out whom is trying to do something with them but needs further help.*

---

A quick walk through using the templates.

The first template. **Hype WKWebView - Single View App** .

This is a very basic template. Once chosen and it’s options completed, you simply just drop you exported Hype project into the new Xcode project..

![49|690x499](https://forums.tumult.com/uploads/db2156/optimized/3X/4/c/4c678a66a908db5a46e910ac83ada51e360d6bb6_2_1380x998.jpeg) ￼

You will need to fill in the usual suspects.

Product Name

Team

Organization Name

Organization Ident.

* **Language** must = **Swift**

* **Name of your Hype HTML file ( without the .html )**

When you export to folder from hype you will get a html file.

The **Name of your Hype HTML file** text field must hold this name but without the extension.

So if we have a file name *foo.html*

we enter **foo** into the text field.

The generated Xcode project will use this name to reference the Hype exported files you will drag and drop into it later on.

* **Class Name of Root View Controller**

This is the ViewController that will be created and which holds the code for the WKWebView

The default name is **WKWebViewController** but you can name it what ever you want.

* **Allows Media Auto Play**

I put this in as a convenience.

If checked /ticked your media, like sound files should be able to play in the App without user interaction.

Like if you have a sound playing on a Scene’s *On scene load* in your hype project.

The rest of the options are standard to Xcode.

Once the options are completed you simple hit **next**

Now just drag and drop you hype exported **foo.html** and **foo.hyperesouces** folder into the Xcode project Navigator.

Make sure you select **Copy items if needed** in the dialogue that shows.

![12|690x316](https://forums.tumult.com/uploads/db2156/optimized/3X/e/f/ef10bbbf6d5c0879ce279412f10a02750b85179b_2_1380x632.jpeg) ￼

You should end up with the files in your Xcode project.

![28|690x185,50%](https://forums.tumult.com/uploads/db2156/optimized/3X/3/b/3b2156bec7fba8d16d1e731609299856af65f403_2_690x184.jpeg) ￼

If you select the *WKWebViewController.swift* file in the Xcode project Navigator, you will see the templated code auto populates the **WKWebview** to use your html file.

And also code for **Allows Media Auto Play** if it was checked.

![17|690x372](https://forums.tumult.com/uploads/db2156/optimized/3X/0/6/063e2f0c76b556f8b719cd0edc2625f4ad40709f_2_1380x744.jpeg) ￼

**Build and run.**

---

**Template two.**

**Hype WKWebView - Postmessage.** / **WKScriptMessageHandler**

Only has the extra option for the **Class Name of Root View Controller**

This template is more complex. The idea behind this is to give you a start and example of how to communicate back and forth between the Native swift App and the Hype project that it is using it.

Being able to do this will expand what you can do with your app

This example holds Xcode and a hype project that shows this interaction.

When you build and run this template it will demonstrate the above.

![29|332x690](https://forums.tumult.com/uploads/db2156/optimized/3X/d/0/d06a87aed416d5d1e83d53c174cb57d543b0e449_2_664x1380.jpeg) ￼

I am including the Actual Hype project used so you can see how simple it is and what you need in the Hype project’s side.



I have posted other posts going over this before. So it is worth reading them.

Once you get you head around it you can substitute the included Hype project for you own.


I have also included the post message base code in the other template but commented out.

---

One point about these templates is that you yourself can customise them yourself to match you own type of common builds.

I will be posting a part two to this post and break down the templates construction as I have made them. It will be very basic though as I do not wish to give full Swift Xcode tutorials.

This hopefully will let some of you add some of your own base code to your copies of the templates if needed.


# Making an app for your website (Flutter)

## Intro
When people use the word 'app', they could really mean any number of things - but most likely they mean a mobile application for Android/iOS/etc.

There are many different ways to create an 'app' though, each with their own pros and cons, here is a small summary of some common app creation methods:

|         | Pros | Cons |
|---------|------|------|
| Website/Webapp | - Works on all devices | - Online only<br> - Not considered a 'real' app to some users<br> - Can't be published to App/Play Store<br>Can be harder to monetize |
| Progressive Web App | - Works on all devices <br>- Can be installed to device<br> - Can work offline<br> - Self Updating<br> - Can be done with just HTML JS CSS | - Apple Devices break PWAs on purpose to encourage App Store<br> - Can't be published to App/Play Store<br> - Can be harder to monetize |
| Native App | - Can work offline<br> - Can be put on the App/Play store<br> | - Works only on the device(s) it's built for<br> - Stricter rules/higher barrier of entry  |

In my opinion PWAs are the best choice, but in reality we know everyone wants to be on the App/Play store - the good news is you can have it all! Your website just needs to have a few specific lines of code to tell the device it's running on it can be installed as a PWA ([read more about that here](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)). Then your users can use the website as normal, or install it as a PWA.

What about the App Store then? Although Google have been flexible in the past, even offering their own PWA to App process, Apple are very strict and it's basically their way or no way at all. So how do you get your website into an app without rewriting it all as a separate, apple or android specific project?

You cheat :) The way some companies do this- is to leave your website as it is, and make your app basically a themed web browser that's locked to your website. This is known as a Wrapper or Hybrid app, and is actually pretty looked down on for obvious reasons - it's not a 'real' app. But if it's good enough for banking and insurance companies, it's good enough for me.

Having the most options available to your users makes your app more visible and accessible, it's good practice if you want to have as many users as possible. Any modern FAANG app is typically available as a website, PWA or App. Doing the hybrid approach let's us have all three quickly.

### Making an App
So then say you have a simple web app, PWA or not, and you want to 'wrap' it, and make it available on the App Store or Play Store. There are many routes you can take to do this, some of the more popular approaches are:

|         | Pros | Cons |
|---------|------|------|
| Paid Service<br>(AppMySite, WebToApp, Appillix) | - They do it all for you | - Expensive<br> - Locked in to them <br> - Dependent on someone else |
| Framework<br>(Cordova, Flutter, React Native, Ionic Capacitor) | - Cross Platform (works on multiple devices) <br> - Big community | - DIY <br> - Depends on community |
| Rewrite to Native App (Android Studio, XCode) | - Results in a 'better' app | - Works only on the device(s) it's built for<br> - Stricter rules/higher barrier of entry<br> - Have to write separate apps for every platform (Windows, Android, iOS, Tizen, etc)  |

Out of these options, creating a native app is probably objectively the 'best' approach, but it is very time consuming and can be difficult to maintain multiple apps for multiple platforms - so with that said my vote goes to using a Framework, and I typically would go to Flutter for this.

### The Plan

So here's the plan:
- Take our current app
- Add PWA code to it
- Add a Flutter wrapper to it
- (Maybe) Add a Cordova wrapper to it, so we can see what we like better

## Creating a wrapper with Flutter

### Installing/Setting up Flutter

##### Installing
Most software on Windows/Mac is actually painful to install, Flutter especially, especially when compared to Linux where you can just type the name of a program to install it and have it ready to go.
```
sudo apt-install cowsay
cowsay "moo"
  ___
< moo >
  ---
         \   ^__^ 
          \  (oo)\_______
             (__)\       )\/\\
                 ||----w |
                 ||     ||
```
On Windows you'd need to go to some random website, download some random exe and hope you haven't accidentally downloaded a virus from the wrong source. Then even after the installation completes you get all sorts of random errors you don't understand, and waste hours with Google or ChatGPT trying to get it running.

For this reason, I recommend installing [Choco](https://chocolatey.org/install), which let's you install programs on Windows via command line. If you are on a Mac you can use [Homebrew](https://brew.sh/) to do the same.

The scripts on Choco and Homebrew are written by automation experts that have been through these issues one too many times, and decided to do something about it. So to install software with most of these issues fixed, now you can just run a single command:

For Windows, run
```
choco install flutter
```
For MacOS, run
```
brew install --cask flutter
```

While you're in here, maybe install Android Studio too, which will give you an Android Emulator you can use to test your app without having to use a real phone or tablet

For Windows, run
```
choco install AndroidStudio
```
For MacOS, run
```
brew install --cask AndroidStudio
```

##### Updating / Configuring
With Flutter now installed, we need to make sure it's set up correctly. Open CMD on your computer and type in `flutter doctor` - it should tell you any other bits and pieces you are missing
[todo step through any issues with the boys and document]

### Creating a new flutter project
Go the the folder for your current app, so you can see the `readme.md` and `src` folders, click on the address bar and type `cmd` then hit enter - you should get a CMD window thats already set to this folder

Now you just need to run `flutter create --org uk.co.yourwebsitename.yourappname flutter_wrapper` and flutter will create your new project for you!

You should see the new folder pop up on your computer, but if you want to see it in CMD you can run `ls` which means 'list directory' or basically 'show me whats in this folder'

So now we have an empty project, lets try and run it!
Open Android Studio from your start menu, and open the new flutter folder inside it. Press play. [TODO]

You should get a default flutter demo app

## Webview changes
By default Flutter doesn't have a webview component, so we need to bring in a plugin for it!

Check the [installation docs for flutter_inappwebview](https://pub.dev/packages/flutter_inappwebview/install) which tell you to run the following steps

In Android Studio (or VSCode) open the Terminal and type in this command to install the plugin
```
flutter pub add flutter_inappwebview
```
The command searches flutters website for a plugin with that name and then downloads the plugin to your computer so you can use it in your app. There are many useful plugins you can use when making apps, so you don't have to re-invent the wheel if someone else has already done it!

With the plugin now downloaded, now to actually use the plugin in your code, add this line to your code - you should see some 'import' lines inside your `main.dart` file, add this after any existing ones:

> /lib/main.dart
```
import 'package:flutter_inappwebview/flutter_inappwebview.dart';
```

The new import line will probably look greyed out after you add it, because the code knows that we're not actually using the plugin anywhere yet.

Let's start removing the default app and adding a webview. Look for the source code that shows the message 'you have pushed the button this many times' - On mine this is lines 82-107
```
child: Column(
    // Column is also a layout widget. It takes a list of children and
    // arranges them vertically. By default, it sizes itself to fit its
    // children horizontally, and tries to be as tall as its parent.
    //
    // Invoke "debug painting" (press "p" in the console, choose the
    // "Toggle Debug Paint" action from the Flutter Inspector in Android
    // Studio, or the "Toggle Debug Paint" command in Visual Studio Code)
    // to see the wireframe for each widget.
    //
    // Column has various properties to control how it sizes itself and
    // how it positions its children. Here we use mainAxisAlignment to
    // center the children vertically; the main axis here is the vertical
    // axis because Columns are vertical (the cross axis would be
    // horizontal).
    mainAxisAlignment: MainAxisAlignment.center,
    children: <Widget>[
        const Text(
            'You have pushed the button this many times:',
        ),
        Text(
            '$_counter',
            style: Theme.of(context).textTheme.headlineMedium,
        ),
    ],
),
```
Replace it with the layout code for the webview, remember to change the link to your own link!

```
child: InAppWebView(
    initialUrlRequest: URLRequest(url: Uri.parse("https://YOURUSERNAME.github.io/example-html-css-js/")),
    initialOptions: InAppWebViewGroupOptions(
    android: AndroidInAppWebViewOptions(
        useHybridComposition: true,
    ),
    crossPlatform: InAppWebViewOptions(
        javaScriptEnabled: true,
        useShouldOverrideUrlLoading: true,
    ),
    ),
),
```
There is also some leftover code in the default project for a floating action button, we don't need that so let's remove it (lines 114 to 118)

```
floatingActionButton: FloatingActionButton(
    onPressed: _incrementCounter,
    tooltip: 'Increment',
    child: const Icon(Icons.add),
), // This trailing comma makes auto-formatting nicer for build methods.
```

And then we can remove the function the button calls, it's variables too (lines 52-64)
```
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      _counter++;
    });
  }
```

Okay, the code is complete for now, let's try and run the app...

[todo]

I got an error here telling me I had to update my gradle file (I think my flutter is out of date tbf), so I went ahead and did that as it told me:
 - Go to flutter_wrapper\android\app\build.gradle
 - found 'compileSdkVersion' and set it to 33
 - found 'minSdkVersion' and set it to 19
 - found 'targetSdkVersion' and set it to 33

And then tried hitting run again and... It worked 🎉

## Improvements

Okay so a few things you might notice:
 - The flutter app has 'Flutter Demo Home Page' labelled across the top of it
 - You had to write your website link inside the source code

We call things like this 'hardcoding', something that probably shouldn't be in the code but is anyway. So let's update our app to read these two things from a config file that can be updated and managed by non-coders

First we'll install another plugin, `flutter_dotenv`.
Once again we'll follow [the plugins installation steps](https://pub.dev/packages/flutter_dotenv/install), open the terminal and put in this command:
```
flutter pub add flutter_dotenv
```

And then add the import again so our app knows it can use this plugin:
```
import 'package:flutter_dotenv/flutter_dotenv.dart';
```

And then lets load our config file when the app starts, find your apps `main()` function call, and replace it with this:

```
Future main() async {
  await dotenv.load(fileName: "assets/.env");
  runApp(const MyApp());
}
```

So we're now telling our app to load a config file from a file called .env inside the assets folder - but this file doesn't exist!

Open the folder for your app on your computer again, and create a folder called assets inside it, and then a file called .env. Open the file in notepad and do something like this:
```
WEBSITE_URL=https://YOURUSERNAME.github.io/example-html-css-js/
APP_NAME=My Flutter App
APP_COLOR=89CFF0
```

Then lastly we need to tell flutter we added this file, and it should build it into the app. Open pubspec.yaml and look for 'assets'. It will be commented out because it's not currently being used:
```
  # To add assets to your application, add an assets section, like this:
  # assets:
  #   - images/a_dot_burr.jpeg
  #   - images/a_dot_ham.jpeg
```

Replace it with this
```
  # To add assets to your application, add an assets section, like this:
  assets:
    - .env
```

Cool! now we have a config file and a loader for it, let's update the code to use the config file values rather than the 'hardcoded' ones.

In Android Studio do CTRL+F and search for 'Flutter demo' - you should get two results. Replace them both with this:
```
dotenv.get('APP_NAME')
```

And then search for the webview code with your 'initialUrlRequest' - let's change the hardcoded URL to:
```
Uri.parse(dotenv.get('WEBSITE_URL'))
```

Okay, fingers crossed, boot the app and see what happens!

## Next Steps
So you now have a very basic app that shows your website - but there's so much more you can do! What do you think of the following ideas:

#### Branding
TODO
- Update the logo for your app to match your website
- Update the splashscreen of your app to match your website
#### Interactivity
TODO
- Maybe you could find a plugin that lets your app ask for reviews in the Google Play/App Store
- Maybe your app needs a login, and users want to use their fingerprint?
- Does your app maybe need notifications?
#### Save time making apps
Say you finish your first app, and you're ready to make another, and then another - but maybe you're sick of writing the same flutter app over and over - and having to keep them updated seperately!
TODO
- What if you had one single flutter codebase, and different config files, or 'flavours' for every app you want - like app1.env, app2.env
  - Then when you need to create a new app, you just build against a different config file rather than rewriting everything
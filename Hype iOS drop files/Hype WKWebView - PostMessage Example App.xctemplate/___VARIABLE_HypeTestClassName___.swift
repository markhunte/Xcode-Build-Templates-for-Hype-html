//___FILEHEADER___
 

import UIKit
import WebKit
import AVFoundation

class ___VARIABLE_rootClassName___: UIViewController, WKNavigationDelegate  ,WKScriptMessageHandler {
 
    
    //-- declare a WKWebView
    var webView: WKWebView!
    
    //-- declare a any vars
    var hello :String = ""
    
    //-- declare a message name to use later
    let messageName = "helloWorld"
    
    //-- declare a your html file  name to use later ( do not include the .html )
    let htmlName = "Hype_world"
    
    
    
    
    
      // MARK: - WKUserContentController:  -> webkit Posted messages handler delegate //-- handles messages from hype page
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        
        
        
        
        //-- Posted messages  from Hype page
        if message.name ==  messageName {
            
            //-- Get the message passed to app
            hello   =  message.body as! String
            
            
            //-- Speak name
            let utterance = AVSpeechUtterance(string:"Hello \( hello)")
            utterance.voice = AVSpeechSynthesisVoice(language: "en-US")
            
            let synth = AVSpeechSynthesizer()
            synth.speak(utterance)
            
        }
        
        
        
    }
    
    
    
    override func viewDidLoad() {
        
        super.viewDidLoad()

        
        //-- configure the WKWebView
        
        //-- init config and controller
        let wconfiguration = WKWebViewConfiguration()
        let wcontroller = WKUserContentController()
        
//MARK: WKUserContentController Init :  We must add the webkit scripts Posted messages we expect to get from the Hype Page to the controller
        wcontroller.add(self, name:  messageName )
        
        //-- attach controller, config to WKWebview
        wconfiguration.userContentController = wcontroller;
        
 
        wconfiguration.allowsInlineMediaPlayback = true
        wconfiguration.mediaTypesRequiringUserActionForPlayback = []
 
        
        webView =  WKWebView(frame: .zero, configuration: wconfiguration)
        

        let  theFileName = (htmlName as NSString).lastPathComponent
        let htmlPath = Bundle.main.path(forResource: theFileName, ofType: "html")
        
        let folderPath = Bundle.main.bundlePath
        
        let baseUrl = URL(fileURLWithPath: folderPath, isDirectory: true)
        
        do {
            
            let htmlString = try NSString(contentsOfFile: htmlPath!, encoding: String.Encoding.utf8.rawValue)
            
            webView.loadHTMLString(htmlString as String, baseURL: baseUrl)
            
        } catch {
            
            // catch error
            
        }
        
        webView.navigationDelegate = self
      
        webView.scrollView.bounces = false
        webView.scrollView.isScrollEnabled = false
        webView.isOpaque = false
        webView.isHidden = false
 
        view = webView
        
    }
    
    
    // MARK: Action for the App to send message to Hype
    @objc func selectorX(_ sender: UIBarButtonItem) {
        
        webView!.evaluateJavaScript("HYPE.documents['\(htmlName)'].showSceneNamed('\(sender.title!)', HYPE.documents['\(htmlName)'].kSceneTransitionCrossfade, 0.2);", completionHandler:nil )
        
        sender.title = ( sender.title  == "Scene 2" ? "Scene 1" : "Scene 2")
        
        
    }
    
    // MARK: Add navigationBar and buttons programmatically
    override func viewWillLayoutSubviews() {
        
        let startingYPos = UIApplication.shared.statusBarFrame.size.height;
        
        
        let width = self.view.frame.width
        let navigationBar: UINavigationBar = UINavigationBar(frame: CGRect(x: 0, y: startingYPos, width: width, height: 44))
        self.view.addSubview(navigationBar);
        let navigationItem = UINavigationItem(title: "Navigation bar")
        let doneBtn = UIBarButtonItem(title: "Scene 2", style: UIBarButtonItem.Style.plain, target: nil, action: #selector(selectorX))
        
        navigationItem.rightBarButtonItem = doneBtn
        navigationBar.setItems([navigationItem], animated: false)
    }
    
    
    
    
}


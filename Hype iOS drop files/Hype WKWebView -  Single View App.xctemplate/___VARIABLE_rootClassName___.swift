//___FILEHEADER___

import UIKit
import WebKit
import AVFoundation

class ___VARIABLE_rootClassName___: UIViewController, WKNavigationDelegate ,WKScriptMessageHandler    {
    
    
     // MARK: Declare a WKWebView
    var webView: WKWebView!
    
    
    // MARK: - WKUserContentController:  -> webkit Posted messages handler delegate //-- handles messages from hype page
    
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        /*  UN-COMMENT FOR HYPE AND APP POSTMESSAGE COMMUNICATION
         
         //-- Posted messages from Hype page code here
         
         if message.name ==  messageName {
         
         //-- Get the message passed to app
         var mbody   =  message.body as! String
         
         }
         */
    }
    
    
    override func viewDidLoad() {
        
        super.viewDidLoad()
        
        
         // MARK:  init config and controller
        let wconfiguration = WKWebViewConfiguration()
        
        
        /* MARK: Media playbac
         false = Play Media playback with native device player ; true =  inline */
        wconfiguration.allowsInlineMediaPlayback = false

        
      /*  UN-COMMENT FOR HYPE AND APP POSTMESSAGE COMMUNICATION
         
         
         // MARK: WKUserContentController Init :
         // We must add the webkit scripts Posted messages we expect to get from the Hype Page to the controller
         
         let wcontroller = WKUserContentController()
         wcontroller.add(self, name: "foo")
         
         //  attach controller, config to WKWebview
         wconfiguration.userContentController = wcontroller;
         
         */
      
        
        /*  MARK: Configure the WKWebView */
        webView =  WKWebView(frame: .zero, configuration: wconfiguration)
   
        /*  MARK: Config Load HTML: */
        let  theFileName = ("___VARIABLE_hypeFileName___" as NSString).lastPathComponent
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
    
    
    
    
}


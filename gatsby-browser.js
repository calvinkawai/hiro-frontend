import "bootstrap/dist/css/bootstrap.min.css"
import Parse from "parse"

Parse.initialize(process.env.GATSBY_APPLICATION_ID, process.env.GATSBY_JAVASCRIPT_KEY);
Parse.serverURL = "https://parseapi.back4app.com/";

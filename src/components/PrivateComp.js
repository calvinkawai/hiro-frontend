import * as React from "react"
import { isLoggedIn, getCurrentUser } from "../services/auth"
import { navigate } from "gatsby"
import { GetUserAvgTennisRating, GetUserTennisRatings, SetUserTennisRatings, SetUserLocation, FindNN } from "../services/user"

const isBrowser = typeof window !== "undefined"

class PrivateComp extends React.Component {
  componentDidMount(prevProps) {
    if (!isLoggedIn()) {
      navigate(`/login`)
    }
    // How we would call user related services
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        SetUserLocation(getCurrentUser(), position.coords.latitude, position.coords.longitude);
      });
    } else {
      console.log("location services Not Available");
    }
    SetUserTennisRatings(getCurrentUser(), 1, 2, 3, 4, 5, 6)
    FindNN(getCurrentUser()).then(results => {
      console.log(results)
    })
    console.log(GetUserAvgTennisRating(getCurrentUser()))
    console.log(GetUserTennisRatings(getCurrentUser()))
  }
  render() {
    let title;
    if (isLoggedIn()) {
      title = <h1>Shopping List {getCurrentUser().getUsername()}</h1>
    }
    return (
      <div className="shopping-list">
        {title}
      </div>
    )
  }
}
export default PrivateComp;

import Parse from "parse"

const commitUser = (name, user) => {
  user.save().then((response) => {
    console.log(name, 'Updated user', response);
  }).catch((error) => {
    console.error('Error while updating user', error);
  });
}

export const SetUserRating = (user, fh, bh, rs, vl, oh, s) => {
  user.set("ratings", {
    "forehand": fh,
    "backhand": bh,
    "return_server": rs,
    "volleys": vl,
    "overheads": oh,
    "server": s
  });
  commitUser("SetUserRating", user);
}

export const SetUserLocation = (user, latitude, longitude) => {
  const point = new Parse.GeoPoint({ latitude: latitude, longitude: longitude });
  user.set("location", point);
  commitUser("SetUserLocation", user);
}

import Parse from "parse"

const commitUser = (name, user) => {
  user.save().then((response) => {
    console.log(name, 'Updated user', response);
  }).catch((error) => {
    console.error('Error while updating user', error);
  });
}

export const GetUserTennisRatings = (user) => {
  return user.get("tennisRatings")
}

export const GetUserAvgTennisRating = (user) => {
  return user.get("avgTennisRating")
}

export const SetUserTennisRatings = (user, f, b, rs, v, o, s) => {
  user.set("tennisRatings", {
    "forehand": f,
    "backhand": b,
    "return_serve": rs,
    "volleys": v,
    "overheads": o,
    "serve": s
  });
  user.set("avgTennisRating", (f + b + rs + v + o + s) / 6)
  commitUser("SetUserTennisRatings", user);
}

export const SetUserLocation = (user, latitude, longitude) => {
  const point = new Parse.GeoPoint({ latitude: latitude, longitude: longitude })
  user.set("location", point)
  commitUser("SetUserLocation", user)
}

export const FindNN = (user, page = 0, limit = 10) => {
  const userGeoPoint = user.get("location")
  const query = new Parse.Query(Parse.User)
  query.near("location", userGeoPoint)
  query.skip(page * limit)
  query.limit(limit)
  // exclude current user
  query.notEqualTo("objectId", user.id)
  return query.find()
}

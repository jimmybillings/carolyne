
var Instafeed, root;


function Instafeed(params) {
  var option, value;
  this.options = {
    user_id: 'USER_ID',
    access_token: 'ACCESS_TOKEN'
  };
  if (typeof params === 'object') {
    for (option in params) {
      value = params[option];
      this.options[option] = value;
    }
  }
}

Instafeed.prototype._urlBuilder = function() {
  var accessToken, baseUrl, callback, count, media, user;
  baseUrl = 'https://api.instagram.com/';
  user = 'v1/users/' + this.options.user_id;
  media = '/media/recent/';
  accessToken = '?access_token=' + this.options.access_token;
  count = '&count=8';
  callback = '&callback=feed._feed';
  this.script = '' + baseUrl + user + media + accessToken + count + callback;
};

Instafeed.prototype._buildScript = function() {
  var instaScript;
  instaScript = document.createElement('script');
  instaScript.src = this.script;
  document.getElementsByTagName('head')[0].appendChild(instaScript);
};

Instafeed.prototype._feed = function(response) {
  var section, d, a, img, result, _i, _len, _ref, _results;
  if (typeof response !== 'object') {
    if ((this.options.error !== null) && typeof this.options.error === 'function') {
      this.options.error.call(this, 'Invalid JSON data');
      return false;
    } else {
      throw new Error('Invalid JSON response');
    }
  }
  if (response.meta.code !== 200) {
    if ((this.options.error !== null) && typeof this.options.error === 'function') {
      this.options.error.call(this, response.meta.error_message);
      return false;
    } else {
      throw new Error('Error from Instagram: ' + response.meta.error_message);
    }
  }
  if (response.data.length === 0) {
    if ((this.options.error !== null) && typeof this.options.error === 'function') {
      this.options.error.call(this, 'No images were returned from Instagram');
      return false;
    } else {
      throw new Error('No images were returned from Instagram');
    }
  }
  _ref = response.data;
  _results = [];
  section = document.querySelector('.instagram');
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    result = _ref[_i];
    d = document.createElement('div');
    d.className = 'col-xs-3';
    a = document.createElement('a');
    a.href = result.images.standard_resolution.url;
    img = document.createElement('img');
    img.src = result.images.low_resolution.url;
    a.appendChild(img);
    d.appendChild(a);
    _results.push(section.appendChild(d));
  }
  return _results;
};

Instafeed.prototype._run = function() {
  if (typeof this.options.user_id !== 'string') {
    throw new Error('your need to enter a user id');
  } else if (typeof this.options.access_token !== 'string') {
    throw new Error('your need to enter a access token');
  } else {
    this._urlBuilder();
    this._buildScript();
  }
};




root = typeof exports !== 'undefined' && exports !== null ? exports : window;

root.Instafeed = Instafeed;

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _defineProperty2 = require('next/node_modules/babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _styles = require('material-ui/styles');

var _Progress = require('material-ui/Progress');

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Grid = require('material-ui/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _colors = require('material-ui/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/thomasmirmotahari/Dropbox/web-development/code/reactvancouver/pages/index.js?entry';

// Material UI Components


// Components
// import Nav from './components/Nav'

var theme = (0, _styles.createMuiTheme)();

var typography = (0, _styles.createTypography)(theme.palette, {
  // System font
  fontFamily: '-apple-system,system-ui,BlinkMacSystemFont,' + '"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif'
});

theme = (0, _extends3.default)({}, theme, {
  palette: (0, _styles.createPalette)((0, _extends3.default)({}, theme.palette, {
    primary: _colors.pink
    // secondary: green['A400'],
  })),
  typography: (0, _extends3.default)({}, typography, {
    display3: (0, _extends3.default)({}, typography.display3, (0, _defineProperty3.default)({
      textTransform: 'uppercase',
      color: '#FFFFFF',
      fontWeight: 100,
      fontSize: '48px'
    }, theme.breakpoints.down('sm'), {
      fontSize: '18px'
    })),
    display1: (0, _extends3.default)({}, typography.display1, (0, _defineProperty3.default)({
      color: '#F5F5F5',
      fontWeight: 300
    }, theme.breakpoints.down('sm'), {
      fontSize: '14px',
      lineHeight: '10px'
    })),
    headline: (0, _extends3.default)({}, typography.headline, {
      textTransform: 'uppercase',
      color: '#F5F5F5'
    }),
    caption: (0, _extends3.default)({}, typography.caption, {
      color: '#F5F5F5',
      position: 'fixed',
      bottom: '20px',
      right: '20px'
    })
  }),
  overrides: {
    MuiButton: {
      raisedPrimary: {
        margin: '10px'
      }
    }

    // Picatic API Key
    // TODO: Pass in API Key
  } });var PICATIC_API_KEY = '';

// Picatic API Domain
var picaticDomain = 'https://api.picatic.com/v2';

// Picatic Page Restrictions
var picaticLimit = '&page[limit]=10&page[offset]=0';

// Picatic Header
var picaticHeader = {
  method: 'GET',
  headers: {
    Authorization: 'Bearer ' + PICATIC_API_KEY
  }
};

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = App.__proto__ || (0, _getPrototypeOf2.default)(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      backgroundUrl: null,
      picaticId: 664654,
      event: null,
      eventId: 119444,
      tickets: []
    }, _this.getPicaticId = function () {
      // User Id Endpoint
      var url = picaticDomain + '/user/me';

      // Fetch Request
      (0, _isomorphicFetch2.default)(url, picaticHeader).then(function (res) {
        return res.json();
      }).then(function (data) {
        return console.log(data);
      }).catch(function (err) {
        return console.log(err);
      });
    }, _this.getEvent = function () {
      // Destructure State
      var eventId = _this.state.eventId;

      // Read Event Endpoint

      var url = picaticDomain + '/event/' + eventId;

      (0, _isomorphicFetch2.default)(url).then(function (res) {
        return res.json();
      }).then(function (event) {
        return _this.setState({ event: event.data });
      }).catch(function (err) {
        return console.log(err);
      });
    }, _this.getEventTickets = function () {
      // Destructure State
      var eventId = _this.state.eventId;

      // All Tickets Based On Event Id Endpoint

      var url = picaticDomain + '/ticket_price?filter[event_id]=' + eventId + picaticLimit;

      (0, _isomorphicFetch2.default)(url, picaticHeader).then(function (res) {
        return res.json();
      }).then(function (tickets) {
        return _this.setState({ tickets: tickets.data });
      }).catch(function (err) {
        return console.log(err);
      });
    }, _this.getRandomPic = function () {
      (0, _isomorphicFetch2.default)('https://source.unsplash.com/category/nature/2880x1800').then(function (res) {
        return res;
      }).then(function (data) {
        // console.log(data)
        var url = data.url;

        _this.setState({ backgroundUrl: url });
      });
    }, _this.getSponsors = function () {
      // Destructure State
      var eventId = _this.state.eventId;

      // Get all sponsors

      var url = picaticDomain + '/sponsor?filter[event_id]=' + eventId + picaticLimit;

      (0, _isomorphicFetch2.default)(url).then(function (res) {
        return res.json();
      }).then(function (sponsors) {
        return _this.setState({ sponsors: sponsors.data });
      }).catch(function (err) {
        return console.log(err);
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getRandomPic();
      this.getEvent();
      this.getSponsors();
    }
  }, {
    key: 'render',
    value: function render() {
      // Destructure State
      var _state = this.state,
          backgroundUrl = _state.backgroundUrl,
          event = _state.event,
          sponsors = _state.sponsors;

      // Pass new image to background

      var style = {
        backgroundImage: 'url(' + backgroundUrl + ')',
        backgroundSize: 'cover'

        // Return nothing if the event has not yet loaded
      };var noEvent = event === null;
      if (noEvent) {
        return _react2.default.createElement('div', { className: 'hero-content', __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          }
        }, _react2.default.createElement(_Progress.CircularProgress, { className: 'mx-auto', size: 50, __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          }
        }));
      }

      // Reformat event day
      var eventDay = (0, _moment2.default)(event.attributes.start_date).format('MMMM Do, YYYY');

      // Search for venue in google maps
      var venueMap = 'http://maps.google.com/?q=' + event.attributes.venue_name + ' ' + event.attributes.venue_street;

      // If sponsors
      // const hasSponsors = sponsors.length !== 0
      var hasSponsors = false;

      return _react2.default.createElement(_styles.MuiThemeProvider, { theme: theme, __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, _react2.default.createElement('div', { className: 'app-img', style: style, __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, _react2.default.createElement('div', { className: 'app-overlay', __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }), _react2.default.createElement('section', { className: 'container', __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, _react2.default.createElement('section', { className: 'hero-content', __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }, _react2.default.createElement(_Grid2.default, { container: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, _react2.default.createElement(_Grid2.default, { item: true, xs: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }, _react2.default.createElement(_Typography2.default, { type: 'display3', __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      }, event.attributes.title)), _react2.default.createElement(_Grid2.default, { item: true, xs: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }, _react2.default.createElement(_Typography2.default, { type: 'display1', __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      }, eventDay)), _react2.default.createElement(_Grid2.default, { item: true, xs: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }, _react2.default.createElement(_Button2.default, {
        href: 'https://www.picatic.com/' + event.id,
        raised: true,
        color: 'primary',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }, 'Join Wait List')), hasSponsors && _react2.default.createElement(_Grid2.default, {
        container: true,
        align: 'center',
        justify: 'center',
        className: 'sponsors',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }, sponsors.map(function (sponsor) {
        var _sponsor$attributes = sponsor.attributes,
            name = _sponsor$attributes.name,
            external_url = _sponsor$attributes.external_url,
            image_uri = _sponsor$attributes.image_uri;

        return _react2.default.createElement(_Grid2.default, { item: true, key: sponsor.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 242
          }
        }, _react2.default.createElement(_Button2.default, { href: external_url, target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 243
          }
        }, _react2.default.createElement('img', {
          src: image_uri,
          alt: name,
          className: 'img-fluid',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244
          }
        })));
      })))))));
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var script = document.createElement('script');

      script.src = 'https://widget.picatic.com/latest/js/embed.min.js';
      script.async = true;
      script.id = 'picatic-widget-script';

      return document.body.appendChild(script);
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmV0Y2giLCJtb21lbnQiLCJNdWlUaGVtZVByb3ZpZGVyIiwiY3JlYXRlTXVpVGhlbWUiLCJjcmVhdGVQYWxldHRlIiwiY3JlYXRlVHlwb2dyYXBoeSIsIkNpcmN1bGFyUHJvZ3Jlc3MiLCJCdXR0b24iLCJUeXBvZ3JhcGh5IiwiR3JpZCIsInBpbmsiLCJ0aGVtZSIsInR5cG9ncmFwaHkiLCJwYWxldHRlIiwiZm9udEZhbWlseSIsInByaW1hcnkiLCJkaXNwbGF5MyIsInRleHRUcmFuc2Zvcm0iLCJjb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImJyZWFrcG9pbnRzIiwiZG93biIsImRpc3BsYXkxIiwibGluZUhlaWdodCIsImhlYWRsaW5lIiwiY2FwdGlvbiIsInBvc2l0aW9uIiwiYm90dG9tIiwicmlnaHQiLCJvdmVycmlkZXMiLCJNdWlCdXR0b24iLCJyYWlzZWRQcmltYXJ5IiwibWFyZ2luIiwiUElDQVRJQ19BUElfS0VZIiwicGljYXRpY0RvbWFpbiIsInBpY2F0aWNMaW1pdCIsInBpY2F0aWNIZWFkZXIiLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIkFwcCIsInN0YXRlIiwiYmFja2dyb3VuZFVybCIsInBpY2F0aWNJZCIsImV2ZW50IiwiZXZlbnRJZCIsInRpY2tldHMiLCJnZXRQaWNhdGljSWQiLCJ1cmwiLCJ0aGVuIiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJnZXRFdmVudCIsInNldFN0YXRlIiwiZ2V0RXZlbnRUaWNrZXRzIiwiZ2V0UmFuZG9tUGljIiwiZ2V0U3BvbnNvcnMiLCJzcG9uc29ycyIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJub0V2ZW50IiwiZXZlbnREYXkiLCJhdHRyaWJ1dGVzIiwic3RhcnRfZGF0ZSIsImZvcm1hdCIsInZlbnVlTWFwIiwidmVudWVfbmFtZSIsInZlbnVlX3N0cmVldCIsImhhc1Nwb25zb3JzIiwidGl0bGUiLCJpZCIsIm1hcCIsInNwb25zb3IiLCJuYW1lIiwiZXh0ZXJuYWxfdXJsIiwiaW1hZ2VfdXJpIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiYXN5bmMiLCJib2R5IiwiYXBwZW5kQ2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFHUCxBQUNFLEFBQ0EsQUFDQSxBQUNBOztBQUVGLEFBQVM7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUzs7Ozs7O0FBWFQ7OztBQWFBO0FBQ0E7O0FBRUEsSUFBSSxRQUFKLEFBQVk7O0FBRVosSUFBTSwyQ0FBOEIsTUFBakIsQUFBdUI7QUFFeEM7Y0FDRSxnREFISixBQUFtQixBQUFnQyxBQUkvQztBQUorQyxBQUNqRCxDQURpQjs7QUFPbkIsbUNBQUEsQUFDSztpRUFFRSxNQURJLEFBQ0U7QUFDQSxBQUNUO0FBTEosQUFFVyxBQUtUO0FBSEUsSUFGTzt5Q0FLVCxBQUNLO3lDQUVFLFdBREwsQUFDZ0I7cUJBRGhCLEFBRWlCLEFBQ2Y7YUFIRixBQUdTLEFBQ1A7a0JBSkYsQUFJYyxBQUNaO2dCQUxGLEFBS1k7QUFIVixPQUlDLE1BQUEsQUFBTSxZQUFOLEFBQWtCLEtBTnJCLEFBTUcsQUFBdUI7Z0JBUjVCLEFBRUUsQUFNa0MsQUFDcEIsQUFHZDtBQUprQyxBQUM5Qjt5Q0FJQyxXQURMLEFBQ2dCO2FBRGhCLEFBRVMsQUFDUDtrQkFIRixBQUdjO0FBRFosT0FFQyxNQUFBLEFBQU0sWUFBTixBQUFrQixLQUpyQixBQUlHLEFBQXVCO2dCQUFRLEFBQ3BCLEFBQ1Y7a0JBbEJOLEFBWUUsQUFJa0MsQUFFbEIsQUFHaEI7QUFMa0MsQUFDOUI7eUNBS0MsV0FETCxBQUNn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NUIsQUFBbUM7c0JBQW5DO3dCQUFBLEFBQ0U7QUFERjs7ZUFDRSxBQUNPLEFBQ0w7ZUFGRixBQUVPLEFBQ0w7cUJBSEYsQUFHWTs7c0JBSFo7d0JBSE4sQUFDRSxBQUNFLEFBQ0UsQUFRUDtBQVJPO0FBQ0U7QUExQzFCLEFBQ0UsQUFDRSxBQUVFLEFBQ0UsQUFDRSxBQW9CSSxBQU1HLEFBMEJsQjs7Ozt5Q0FDb0IsQUFDbkI7VUFBTSxTQUFTLFNBQUEsQUFBUyxjQUF4QixBQUFlLEFBQXVCLEFBRXRDOzthQUFBLEFBQU8sTUFBUCxBQUFhLEFBQ2I7YUFBQSxBQUFPLFFBQVAsQUFBZSxBQUNmO2FBQUEsQUFBTyxLQUFQLEFBQVksQUFFWjs7YUFBTyxTQUFBLEFBQVMsS0FBVCxBQUFjLFlBQXJCLEFBQU8sQUFBMEIsQUFDbEM7Ozs7O0FBNUtlLEEsQUErS2xCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy90aG9tYXNtaXJtb3RhaGFyaS9Ecm9wYm94L3dlYi1kZXZlbG9wbWVudC9jb2RlL3JlYWN0dmFuY291dmVyIn0=
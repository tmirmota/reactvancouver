'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('next/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('next/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

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

// Components


// Material UI Components


// Picatic Requests
var picaticHost = 'https://api.picatic.com/v2';
var picaticLimit = '&page[limit]=10&page[offset]=0';

var _class = function (_Component) {
  (0, _inherits3.default)(_class, _Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          picture = _props.picture,
          event = _props.event,
          sponsors = _props.sponsors;

      // Pass new image to background

      var style = {
        backgroundImage: 'url(' + picture + ')',
        backgroundSize: 'cover'
      };

      var noEvent = event === undefined;
      if (noEvent) {
        return _react2.default.createElement('div', { className: 'hero-content', __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, _react2.default.createElement(_Progress.CircularProgress, { className: 'mx-auto', size: 50, __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }));
      }

      // Reformat event day
      var eventDay = (0, _moment2.default)(event.attributes.start_date).format('MMMM Do, YYYY');

      var googleMapsLink = 'http://maps.google.com/?q=' + event.attributes.venue_name + ' ' + event.attributes.venue_street;

      var hasSponsors = sponsors.length !== 0;

      return _react2.default.createElement(_Layout2.default, { title: 'React September Meetup | React Vancouver', __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement('div', { className: 'app-img', style: style, __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, stylesheet, _react2.default.createElement('div', { className: 'app-overlay', __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), _react2.default.createElement('section', { className: 'container', __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement('section', { className: 'hero-content', __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_Grid2.default, { container: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement(_Grid2.default, { item: true, xs: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement(_Typography2.default, { type: 'display3', __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, event.attributes.title)), _react2.default.createElement(_Grid2.default, { item: true, xs: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement(_Typography2.default, { type: 'display1', __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, eventDay)), _react2.default.createElement(_Grid2.default, { item: true, xs: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement(_Button2.default, {
        href: 'https://www.picatic.com/' + event.id,
        raised: true,
        color: 'primary',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, 'Get Tickets')), hasSponsors && _react2.default.createElement(_Grid2.default, {
        container: true,
        align: 'center',
        justify: 'center',
        className: 'sponsors',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, sponsors.map(function (sponsor) {
        var _sponsor$attributes = sponsor.attributes,
            name = _sponsor$attributes.name,
            external_url = _sponsor$attributes.external_url,
            image_uri = _sponsor$attributes.image_uri;

        return _react2.default.createElement(_Grid2.default, { item: true, key: sponsor.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          }
        }, _react2.default.createElement(_Button2.default, { href: external_url, target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        }, _react2.default.createElement('img', {
          src: image_uri,
          alt: name,
          className: 'img-fluid',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        })));
      })))))));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var script = document.createElement('script');
      script.src = 'https://widget.picatic.com/latest/js/embed.min.js';
      script.id = 'picatic-widget-script';
      script.async = true;

      document.body.appendChild(script);
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var unsplashRandom, picture, eventId, getEvent, eventJSON, event, getSponsors, sponsorsJSON, sponsors;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _isomorphicFetch2.default)('https://source.unsplash.com/category/nature/2880x1800');

              case 2:
                unsplashRandom = _context.sent;
                picture = unsplashRandom.url;
                eventId = 119444;
                _context.next = 7;
                return (0, _isomorphicFetch2.default)(picaticHost + '/event/' + eventId);

              case 7:
                getEvent = _context.sent;
                _context.next = 10;
                return getEvent.json();

              case 10:
                eventJSON = _context.sent;
                _context.next = 13;
                return eventJSON.data;

              case 13:
                event = _context.sent;
                _context.next = 16;
                return (0, _isomorphicFetch2.default)(picaticHost + '/sponsor?filter[event_id]=' + eventId + picaticLimit);

              case 16:
                getSponsors = _context.sent;
                _context.next = 19;
                return getSponsors.json();

              case 19:
                sponsorsJSON = _context.sent;
                _context.next = 22;
                return sponsorsJSON.data;

              case 22:
                sponsors = _context.sent;
                return _context.abrupt('return', { picture: picture, event: event, sponsors: sponsors });

              case 24:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _class;
}(_react.Component);

exports.default = _class;


var stylesheet = _react2.default.createElement('style', { jsx: true, __source: {
    fileName: _jsxFileName,
    lineNumber: 138
  }
}, '\n      .app-img {\n        text-align: center;\n        min-height: 100vh;\n      }\n\n      .app-overlay {\n        background-color: #3f51b5;\n        min-height: 100vh;\n        opacity: 0.4;\n        position: absolute;\n        width: 100%;\n      }\n\n      .hero-content {\n        min-height: calc(100vh - 100px);\n        display: flex;\n        align-items: center;\n      }\n\n      @media (min-width: 800px) {\n        .sponsors {\n          position: absolute;\n          bottom: 0;\n          left: 0;\n        }\n      }\n\n      .img-fluid {\n        max-height: 50px;\n        max-width: 200px;\n      }\n\n      @media (max-width: 750px) {\n        .sponsors {\n          padding-top: 3rem;\n        }\n        .img-fluid {\n          max-height: 25px;\n          max-width: 100px;\n        }\n      }\n    ');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmV0Y2giLCJtb21lbnQiLCJMYXlvdXQiLCJDaXJjdWxhclByb2dyZXNzIiwiQnV0dG9uIiwiVHlwb2dyYXBoeSIsIkdyaWQiLCJwaW5rIiwicGljYXRpY0hvc3QiLCJwaWNhdGljTGltaXQiLCJwcm9wcyIsInBpY3R1cmUiLCJldmVudCIsInNwb25zb3JzIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsIm5vRXZlbnQiLCJ1bmRlZmluZWQiLCJldmVudERheSIsImF0dHJpYnV0ZXMiLCJzdGFydF9kYXRlIiwiZm9ybWF0IiwiZ29vZ2xlTWFwc0xpbmsiLCJ2ZW51ZV9uYW1lIiwidmVudWVfc3RyZWV0IiwiaGFzU3BvbnNvcnMiLCJsZW5ndGgiLCJzdHlsZXNoZWV0IiwidGl0bGUiLCJpZCIsIm1hcCIsInNwb25zb3IiLCJuYW1lIiwiZXh0ZXJuYWxfdXJsIiwiaW1hZ2VfdXJpIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiYXN5bmMiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ1bnNwbGFzaFJhbmRvbSIsInVybCIsImV2ZW50SWQiLCJnZXRFdmVudCIsImpzb24iLCJldmVudEpTT04iLCJkYXRhIiwiZ2V0U3BvbnNvcnMiLCJzcG9uc29yc0pTT04iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFHUCxBQUFPOzs7O0FBR1AsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTOzs7Ozs7QUFSVDs7O0FBR0E7OztBQU9BO0FBQ0EsSUFBTSxjQUFOLEFBQW9CO0FBQ3BCLElBQU0sZUFBTixBQUFxQjs7Ozs7Ozs7Ozs7Ozs2QkF3QlY7bUJBQzhC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QSxBQUFTLGNBQXhCLEFBQWUsQUFBdUIsQUFDdEM7YUFBQSxBQUFPLE1BQVAsQUFBYSxBQUNiO2FBQUEsQUFBTyxLQUFQLEFBQVksQUFDWjthQUFBLEFBQU8sUUFBUCxBQUFlLEFBRWY7O2VBQUEsQUFBUyxLQUFULEFBQWMsWUFBZCxBQUEwQixBQUMzQjs7Ozs7Ozs7Ozs7O3VCQWpIOEIsK0JBQUEsQSxBQUMzQjs7bUJBREk7QSwwQ0FHQTtBLDBCQUFVLGVBQWUsQSxBQUV6QjtBLDBCQUFVLEE7O3VCQUVPLCtCQUFBLEFBQVMsMEJBQVQsQUFBOEIsQTs7bUJBQS9DO0E7O3VCQUNrQixTQUFBLEEsQUFBUzs7bUJBQTNCO0E7O3VCQUNjLFVBQVUsQTs7bUJBQXhCO0E7O3VCQUVvQiwrQkFBQSxBQUNyQiw2Q0FEcUIsQUFDbUIsVUFEbkIsQUFDNkIsQTs7bUJBRGpEO0E7O3VCQUdxQixZQUFBLEFBQVksQTs7bUJBQWpDO0E7O3VCQUNpQixhQUFhLEE7O21CQUE5QjtBO2lEQUVDLEVBQUUsU0FBRixTQUFXLE9BQVgsT0FBa0IsVUFBbEIsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBLEFBbkJrQjs7Ozs7QUFzSDdCLElBQU0sNkJBQ0osY0FBQSxXQUFPLEtBQVA7Y0FBQTtnQkFBQTtBQUFBO0NBQUEsRUFERixBQUNFIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy90aG9tYXNtaXJtb3RhaGFyaS9Ecm9wYm94L3dlYi1kZXZlbG9wbWVudC9jb2RlL3JlYWN0dmFuY291dmVyIn0=
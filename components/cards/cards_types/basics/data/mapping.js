"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapBasicsDataToJsonResume = exports.mapJsonResumeToBasicData = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mapJsonResumeToBasicData = function mapJsonResumeToBasicData(jsonResume) {
  var _jsonResume$basics, _jsonResume$basics$lo, _jsonResume$basics2, _jsonResume$basics2$l, _ref, _jsonResume$basics3, _jsonResume$specific, _jsonResume$specific$, _jsonResume$specific2, _jsonResume$specific3, _jsonResume$specific4, _jsonResume$specific5, _jsonResume$specific6, _jsonResume$specific7, _jsonResume$basics4, _jsonResume$specific8, _jsonResume$specific9, _jsonResume$specific10;

  var city = (_jsonResume$basics = jsonResume.basics) === null || _jsonResume$basics === void 0 ? void 0 : (_jsonResume$basics$lo = _jsonResume$basics.location) === null || _jsonResume$basics$lo === void 0 ? void 0 : _jsonResume$basics$lo.city;
  var countryCode = (_jsonResume$basics2 = jsonResume.basics) === null || _jsonResume$basics2 === void 0 ? void 0 : (_jsonResume$basics2$l = _jsonResume$basics2.location) === null || _jsonResume$basics2$l === void 0 ? void 0 : _jsonResume$basics2$l.countryCode;
  return {
    currentCity: (_ref = (city || countryCode) && {
      name: "".concat(city, " ").concat(countryCode && ",".concat(countryCode))
    }) !== null && _ref !== void 0 ? _ref : {},
    summary: jsonResume === null || jsonResume === void 0 ? void 0 : (_jsonResume$basics3 = jsonResume.basics) === null || _jsonResume$basics3 === void 0 ? void 0 : _jsonResume$basics3.summary,
    experienceYears: jsonResume === null || jsonResume === void 0 ? void 0 : (_jsonResume$specific = jsonResume.specific) === null || _jsonResume$specific === void 0 ? void 0 : (_jsonResume$specific$ = _jsonResume$specific.work) === null || _jsonResume$specific$ === void 0 ? void 0 : _jsonResume$specific$.experienceYears,
    studiesLevel: jsonResume === null || jsonResume === void 0 ? void 0 : (_jsonResume$specific2 = jsonResume.specific) === null || _jsonResume$specific2 === void 0 ? void 0 : (_jsonResume$specific3 = _jsonResume$specific2.education) === null || _jsonResume$specific3 === void 0 ? void 0 : _jsonResume$specific3.studiesLevel,
    codingYears: jsonResume === null || jsonResume === void 0 ? void 0 : (_jsonResume$specific4 = jsonResume.specific) === null || _jsonResume$specific4 === void 0 ? void 0 : (_jsonResume$specific5 = _jsonResume$specific4.work) === null || _jsonResume$specific5 === void 0 ? void 0 : _jsonResume$specific5.codingYears,
    codingReason: jsonResume === null || jsonResume === void 0 ? void 0 : (_jsonResume$specific6 = jsonResume.specific) === null || _jsonResume$specific6 === void 0 ? void 0 : (_jsonResume$specific7 = _jsonResume$specific6.work) === null || _jsonResume$specific7 === void 0 ? void 0 : _jsonResume$specific7.codingReason,
    visaSponsorship: jsonResume === null || jsonResume === void 0 ? void 0 : (_jsonResume$basics4 = jsonResume.basics) === null || _jsonResume$basics4 === void 0 ? void 0 : _jsonResume$basics4.visaSponsorship,
    searchState: jsonResume === null || jsonResume === void 0 ? void 0 : (_jsonResume$specific8 = jsonResume.specific) === null || _jsonResume$specific8 === void 0 ? void 0 : (_jsonResume$specific9 = _jsonResume$specific8.work) === null || _jsonResume$specific9 === void 0 ? void 0 : _jsonResume$specific9.searchState,
    personalDescription: jsonResume === null || jsonResume === void 0 ? void 0 : (_jsonResume$specific10 = jsonResume.specific) === null || _jsonResume$specific10 === void 0 ? void 0 : _jsonResume$specific10.basics.personalDescription
  };
};

exports.mapJsonResumeToBasicData = mapJsonResumeToBasicData;

var mapBasicsDataToJsonResume = function mapBasicsDataToJsonResume(data) {
  return {
    basics: {
      summary: data.summary,
      visaSponsorship: data.visaSponsorship,
      personalDescription: data.personalDescription,
      location: data.currentCity && _objectSpread({}, data.currentCity, {
        city: data.currentCity.name
      })
    },
    specific: {
      work: {
        experienceYears: data.experienceYears,
        codingYears: data.codingYears,
        codingReason: data.codingReason,
        searchState: data.searchState
      },
      education: {
        studiesLevel: data.studiesLevel
      }
    }
  };
};

exports.mapBasicsDataToJsonResume = mapBasicsDataToJsonResume;
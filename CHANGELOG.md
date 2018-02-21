# Change Log

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

## [2.0.2] - 2018-02-25
 - Add support for prefixed keyframes(#27, #25). Thnx @olavhaugen for PR

## [2.0.1] - 2017-08-25
 - Fix keyframes adding to common reset list .Thnx @copycut for suggestion!

## [2.0.0] - 2017-07-30
- Update to PostCSS 6

## [1.2.1] - 2016-10-09
Thnx to @giuseppeg and simonsmith for contribution!
- Do not modify css if not required
- Fix duplicate selector issue when using nested rulesets. ([#18](https://github.com/maximkoretskiy/postcss-autoreset/pull/18))

## [1.2.0] - 2016-09-29
- Improved accuracy of SUIT CSS regex (see https://github.com/maximkoretskiy/postcss-autoreset/pull/17 and https://github.com/maximkoretskiy/postcss-autoreset/issues/16). Thnx @giuseppeg and @simonsmith for suggestion and contribution.

## [1.1.5] - 2016-01-21
- Fix plugin prepublish script again with babel-plugin-add-module-exports. Thnx @mikaa123 for patience %)
- Add integration test to prevent this bug.

## [1.1.4] - 2016-01-21
- Fix plugin prepublish script with babel-plugin-transform-es2015-modules-umd. Thnx @mikaa123 for bugreport

## [1.1.3] - 2016-01-21
- Put all resets in one rule. Thnx @DanGamble89 for idea
- Add virtual source for generated code. Thnx @ai for review
- Change test suite from tape to ava
- Change test suite from ava to mocha(for more helpfull diffs)
- Update deps

## [1.1.2] - 2016-01-10
- Fixed default matchers pseudoclasses matching. Thnx to @kinday for contribution.

## [1.1.1] - 2015-12-16
- Roll back dependencies update to fix test suite work

## [1.1.0] - 2015-12-16
- Added `css2js` custom rules notation support. Thnx to @ai for idea
- Update deps

## [1.0.0] - 2015-08-29
First project release.
Added
 - BEM and Suit support
 - README docs

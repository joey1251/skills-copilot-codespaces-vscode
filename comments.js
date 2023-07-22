// Create web server

// npm install -g http-server
// http-server
// http://localhost:8080
// http://localhost:8080/member.html

// Path: member.js
// function skillsMember() {
//   return {
//     restrict: 'E',
//     templateUrl: 'templates/skills-member.html'
//   };
// }
// Path: skills-member.html
// <div>
//   <h4>{{member.name}}</h4>
//   <p>{{member.description}}</p>
// </div>
// Path: member.js
// function skillsMember() {
//   return {
//     restrict: 'E',
//     templateUrl: 'templates/skills-member.html',
//     scope: {
//       member: '='
//     }
//   };
// }
// Path: members.js
// function skillsMembers() {
//   return {
//     restrict: 'E',
//     templateUrl: 'templates/skills-members.html',
//     scope: {
//       members: '='
//     }
//   };
// }
// Path: skills-members.html
// <skills-member ng-repeat="member in members" member="member"></skills-member>
// Path: index.html
// <body ng-app="skillsApp">
//   <div ng-controller="SkillsCtrl">
//     <skills-members members="members"></skills-members>
//   </div>
// </body>
// Path: skills.js
// function skills() {
//   return {
//     restrict: 'E',
//     templateUrl: 'templates/skills.html',
//     scope: {
//       skills: '='
//     }
//   };
// }
// Path: index.html
// <body ng-app="skillsApp">
//   <div ng-controller="SkillsCtrl">
//     <skills skills="skills"></skills>
//     <skills-members members="members"></skills-members>
//   </div>
// </body>
// Path: skills.js
// function skills() {
//   return {
//     restrict: 'E',
//     templateUrl: 'templates/skills.html',
//     scope: {
//       skills: '=',
//       members: '='
//     }
//   };
// }
// Path: index.html
// <body ng-app="skillsApp">
//   <div ng-controller="SkillsCtrl">
//     <skills skills="skills" members="members"></skills>
//   </div>
// </body>
// Path: skills


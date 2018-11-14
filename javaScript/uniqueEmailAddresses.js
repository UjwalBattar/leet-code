// Every email consists of a local name and a domain name,
//     separated by the @ sign.

// For example, in alice @leetcode.com, alice is the local name,
//     and leetcode.com is the domain name.

// Besides lowercase letters, these emails may contain '.'
// s or '+'
// s.

// If you add periods('.') between some characters in the local name
// part of an email address, mail sent there will be forwarded to the
// same address without dots in the local name.For example,
//     "alice.z@leetcode.com"
// and "alicez@leetcode.com"
// forward to the
// same email address.

// If you add a plus('+') in the local name, everything after
// the first plus sign will be ignored.This allows certain emails
// to be filtered,
// for example m.y + name @email.com will be forwarded
// to my @email.com.

// It is possible to use both of these rules at the same time.

// Given a list of emails, we send one email to each address in the list.
// How many different addresses actually receive mails ?

//     Example 1 :

// Input: ["test.email+alex@leetcode.com",
//     "test.e.mail+bob.cathy@leetcode.com",
//     "testemail+david@lee.tcode.com"
// ]
// Output: 2
// Explanation: "testemail@leetcode.com"
// and "testemail@lee.tcode.com"
// actually receive mails


// Note:

//     1 <= emails[i].length <= 100
// 1 <= emails.length <= 100
// Each emails[i] contains exactly one '@'
// character.

/**
 * @param {string[]} emails
 * @return {number}
 */
// my first attempt
// var numUniqueEmails = function (emails) {
//     if (!emails || !emails.length) return 0;
//     let uniqueEmails = {};
//     for (let i = 0; i < emails.length; i++) {
//         let temp = emails[i].split('@');
//         temp[0] = temp[0].split('+')[0].split('.').join('');
//         temp = temp.join('@');
//         uniqueEmails[temp] = 1;
//     }
//     return Object.keys(uniqueEmails).length;
// };

// second attempt
var numUniqueEmails = function (emails) {
    let uniqueEmails = {};
    let count = 0;

    for (let i = 0; i < emails.length; i++) {
        let email = emails[i];
        let atIdx = email.indexOf('@') + 1;
        let domain = email.slice(atIdx);
        let name = email.slice(0, email.indexOf('+'));
        let sanitizedName = name.replace(/\./g, '');
        if (uniqueEmails[domain]) {
            if (uniqueEmails[domain].indexOf(sanitizedName) === -1) {
                uniqueEmails[domain].push(sanitizedName);
                count++;
            }
        } else {
            uniqueEmails[domain] = [sanitizedName];
            count++;
        }
    }
    return count;
};
numUniqueEmails(["test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com"
]);
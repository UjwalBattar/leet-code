# Every email consists of a local name and a domain name, 
# separated by the @ sign.

# For example, in alice@leetcode.com, alice is the local name, 
# and leetcode.com is the domain name.

# Besides lowercase letters, these emails may contain '.'s or '+'s.

# If you add periods ('.') between some characters in the local name 
# part of an email address, mail sent there will be forwarded to the 
# same address without dots in the local name.  For example, 
# "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the 
# same email address.

# If you add a plus ('+') in the local name, everything after 
# the first plus sign will be ignored. This allows certain emails 
# to be filtered, for example m.y+name@email.com will be forwarded 
# to my@email.com.

# It is possible to use both of these rules at the same time.

# Given a list of emails, we send one email to each address in the list.  
# How many different addresses actually receive mails? 

# Example 1:

# Input: ["test.email+alex@leetcode.com",
#     "test.e.mail+bob.cathy@leetcode.com",
#     "testemail+david@lee.tcode.com"]
# Output: 2
# Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" 
# actually receive mails
 

# Note:

# 1 <= emails[i].length <= 100
# 1 <= emails.length <= 100
# Each emails[i] contains exactly one '@' character.

# @param {String[]} emails
# @return {Integer}
# first attempt
# def num_unique_emails(emails)
#     unique_emails = {}
#     count = 0

#     emails.each do |email|
#         at_idx = email.index('@')
#         plus_idx = email.index('+')
#         domain = email[at_idx..-1]
#         name = plus_idx ? email[0...plus_idx] : email[0...at_idx]
#         sanitized_name = name.gsub(/[.]/, '')
#         unless unique_emails[domain].nil?
#             if unique_emails[domain].index(sanitized_name).nil?
#                 unique_emails[domain] << sanitized_name
#                 count += 1
#             end
#         else 
#             unique_emails[domain] = [sanitized_name]
#             count += 1
#         end
#     end
#     count
# end

# second attempt
def num_unique_emails(emails)
    arr = []
    emails.each do |email|
        left,right = email.split('@')
        cutoff = left.index('+')
        left = left[0...cutoff] if !cutoff.nil?
        left.delete!('.')
        arr << left + "@" + right
    end
    arr.uniq.length
end

num_unique_emails(["test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com"
])
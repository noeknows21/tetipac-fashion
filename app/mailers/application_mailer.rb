class ApplicationMailer < ActionMailer::Base
  default from: ENV["GMAIL_USER_AND_DOMAIN"]
  layout 'mailer'
end

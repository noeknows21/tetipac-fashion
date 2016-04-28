class ApplicationMailer < ActionMailer::Base
  default from: (ENV["GMAIL_TETI_USER"] + "@gmail.com")
  layout 'mailer'
end

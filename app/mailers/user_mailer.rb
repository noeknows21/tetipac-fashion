class UserMailer < ApplicationMailer
  default from: (ENV["GMAIL_TETI_USER"] + "@gmail.com")
  
  def contact_email
    mail(to: ENV["EMAIL_RECEIVER"], subject: 'New Message')
  end
end

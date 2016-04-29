class UserMailer < ApplicationMailer
  default from: ENV["GMAIL_USER_AND_DOMAIN"]
  
  def contact_email
    mail(to: ENV["EMAIL_RECEIVER"], subject: 'New Message')
  end
end

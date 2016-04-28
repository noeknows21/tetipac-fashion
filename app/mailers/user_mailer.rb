class UserMailer < ApplicationMailer
  default from: ' tetipacsite@gmail.com'
  
  def contact_email
    mail(to: 'noeon270@hotmail.com', subject: 'New Message')
  end
end

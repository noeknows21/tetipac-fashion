class MainController < ApplicationController
  def index
  end
  
  def products
  end
  
  def gallery
  end
  
  def about
  end
  
  def contact
  end
  
  def send_email
    $customer_name = params[:name]
    $customer_email = params[:email]
    $message_content = params[:message]
    if params[:name] != '' && params[:message] != '' && params[:email] != ''
      if /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i.match(params[:email])
      UserMailer.contact_email.deliver_now
      else
        redirect_to '/main/contact', notice: 'Invalid email format'
      end
    else
      redirect_to '/main/contact', notice: 'Please fill out all fields'    
    end
  end
end

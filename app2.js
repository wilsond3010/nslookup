import java.io.*;  
import java.net.*;  
class inettest  
{public static void main(String args[])  
{try  
{System.out.println(InetAddress.getAllByName("www.yahoo.com"));  
   
}  
catch(UnknownHostException e)  
{System.out.println("Domain not found");  
}  
}  
}

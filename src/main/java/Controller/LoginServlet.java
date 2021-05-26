package Controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import Models.Usuario;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/**
 * Servlet implementation class LoginServlet
 */
@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */ 
	protected void doGet(HttpServletRequest request, HttpServletResponse response) 
	   throws ServletException, IOException {
       response.setContentType("text/jsp");
       
       List<Usuario> users = new ArrayList<>();
       
       String name = request.getParameter("names");
       String surname = request.getParameter("surnames");
       String age = request.getParameter("age");
       
       Usuario user = new Usuario(name,surname,age);
       users.add(user);
       
       
       Usuario user2 = new Usuario("fiorela","villarroel","18");
       users.add(user2);
       
       request.setAttribute("user",user);
       request.setAttribute("user2",user2);
       
       getServletContext().getRequestDispatcher("/home.jsp").forward(request, response);
       
       
  
		
       
       
       
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}

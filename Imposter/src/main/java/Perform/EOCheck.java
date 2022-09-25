package Perform;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Random;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class EOCheck extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		Random rand = new Random();
		boolean i = rand.nextBoolean();
		PrintWriter out = response.getWriter();
		String name = request.getParameter("t1");
		if (i) {
			out.println(name + " is dungeon master!");
		} else {
			out.println(name + " is fucking slave!");
		}
	}

}

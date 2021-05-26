package Models;

public class Usuario {
	
		private String name;
		private String surname;
		private String age;
		
		public Usuario(String name,String surname,String age) {
			this.name=name;
			this.surname=surname;
			this.age=age;
		}
		
		public String getname() {
			return this.name;
		}
		public String getsurname() {
			return this.surname;
		}
		public String getage () {
			return this.age;
		}
}

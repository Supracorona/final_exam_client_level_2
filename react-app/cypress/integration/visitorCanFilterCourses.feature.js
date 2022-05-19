describe('Visitor can filter the courses', () => {



  before(() => {
    cy.intercept("GET", "**/data/courses.json", {fixture: "courseListResponse.json"});
    cy.visit("/");
  });



  describe('click on Workshops navigation', () => {
    
    before(() => {
      cy.get("[data-cy=workshops-navigation").click();
    });

    it("is expected to display Work The Web course section", () => {

    });

    it("is expected to not display Test Automation using Cypress course section", () => {

    });

    it("is expected to not display Introduction to VUE3 course section", () => {

    });

    it("is expected to not display Building Web Applications using VUE 3 course section", () => {

    });

    it("is expected to not display Version Control with Git course section", () => {

    });

    it("is expected to not display API development with NodeJS course section", () => {

    });

    it("is expected to not display ReactJs - Getting Started (2020 edition) course section", () => {

    });

  });



  describe('click on Testing navigation', () => {
    
    before(() => {
      cy.get("[data-cy=testing-navigation").click();
    });

    it("is expected to not display Work The Web course section", () => {

    });

    it("is expected to display Test Automation using Cypress course section", () => {

    });

    it("is expected to not display Introduction to VUE3 course section", () => {

    });

    it("is expected to not display Building Web Applications using VUE 3 course section", () => {

    });

    it("is expected to not display Version Control with Git course section", () => {

    });

    it("is expected to not display API development with NodeJS course section", () => {

    });

    it("is expected to not display ReactJs - Getting Started (2020 edition) course section", () => {

    });


  });



  describe('click on Vue navigation', () => {
    
    before(() => {
      cy.get("[data-cy=vue-navigation").click();
    });

    it("is expected to not display Work The Web course section", () => {

    });

    it("is expected to not display Test Automation using Cypress course section", () => {

    });

    it("is expected to display Introduction to VUE3 course section", () => {

    });

    it("is expected to display Building Web Applications using VUE 3 course section", () => {

    });

    it("is expected to not display Version Control with Git course section", () => {

    });

    it("is expected to not display API development with NodeJS course section", () => {

    });

    it("is expected to not display ReactJs - Getting Started (2020 edition) course section", () => {

    });

  });



  describe('click on Productivity navigation', () => {
    
    before(() => {
      cy.get("[data-cy=productivity-navigation").click();
    });


    it("is expected to not display Work The Web course section", () => {

    });

    it("is expected to not display Test Automation using Cypress course section", () => {

    });

    it("is expected to not display Introduction to VUE3 course section", () => {

    });

    it("is expected to not display Building Web Applications using VUE 3 course section", () => {

    });

    it("is expected to display Version Control with Git course section", () => {

    });

    it("is expected to not display API development with NodeJS course section", () => {

    });

    it("is expected to not display ReactJs - Getting Started (2020 edition) course section", () => {

    });

  });



  describe('click on Node navigation', () => {
    
    before(() => {
      cy.get("[data-cy=node-navigation").click();
    });


    it("is expected to not display Work The Web course section", () => {

    });

    it("is expected to not display Test Automation using Cypress course section", () => {

    });

    it("is expected to not display Introduction to VUE3 course section", () => {

    });

    it("is expected to not display Building Web Applications using VUE 3 course section", () => {

    });

    it("is expected to not display Version Control with Git course section", () => {

    });

    it("is expected to display API development with NodeJS course section", () => {

    });

    it("is expected to not display ReactJs - Getting Started (2020 edition) course section", () => {

    });

  });



  describe('click on React navigation', () => {
    
    before(() => {
      cy.get("[data-cy=react-navigation").click();
    });

    it("is expected to not display Work The Web course section", () => {

    });

    it("is expected to not display Test Automation using Cypress course section", () => {

    });

    it("is expected to not display Introduction to VUE3 course section", () => {

    });

    it("is expected to not display Building Web Applications using VUE 3 course section", () => {

    });

    it("is expected to not display Version Control with Git course section", () => {

    });

    it("is expected to not display API development with NodeJS course section", () => {

    });

    it("is expected to display ReactJs - Getting Started (2020 edition) course section", () => {

    });

  });



  describe('click on COURSE LIST in header', () => {
    
    before(() => {
      cy.get("[data-cy=course-list-header").click();
    });

    it("is expected to display Work The Web course section", () => {

    });

    it("is expected to display Test Automation using Cypress course section", () => {

    });

    it("is expected to display Introduction to VUE3 course section", () => {

    });

    it("is expected to display Building Web Applications using VUE 3 course section", () => {

    });

    it("is expected to display Version Control with Git course section", () => {

    });

    it("is expected to display API development with NodeJS course section", () => {

    });

    it("is expected to display ReactJs - Getting Started (2020 edition) course section", () => {

    });

  });

});
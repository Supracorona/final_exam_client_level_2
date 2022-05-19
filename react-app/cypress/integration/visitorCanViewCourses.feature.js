describe('Visitor can visit application and see all courses', () => {
  


  before(() => {
    cy.intercept("GET", "**/data/courses.json", {fixture: "courseListResponse.json"}).as("coursesList");
    cy.visit("/");
  });



  it("is expected to receive collection of courses", () => {
    cy.wait("@coursesList").its("response.body").should("be.an", "array").and("have.lenght", 7);
  });



  it("is expected to see header", () => {
    cy.get("[data-cy=course-list-header]").should("contain.text", "COURSE LIST");
  });



  describe('Visitor can see navigation with course section names', () => {

    it("is expected to see Workshops navigation", () => {
      cy.get("[data-cy=workshops-navigation]").should("contain.text", "Workshops");
    });

    it("is expected to see Testing navigation", () => {
      cy.get("[data-cy=testing-navigation]").should("contain.text", "Testing");
    });

    it("is expected to see Vue navigation", () => {
      cy.get("[data-cy=vue-navigation]").should("contain.text", "Vue");
    });

    it("is expected to see Productivity navigation", () => {
      cy.get("[data-cy=productivity-navigation]").should("contain.text", "Productivity");
    });

    it("is expected to see Node navigation", () => {
      cy.get("[data-cy=node-navigation]").should("contain.text", "Node");
    });

    it("is expected to see React navigation", () => {
      cy.get("[data-cy=react-navigation]").should("contain.text", "React");
    });

  });



  describe('Visitor can see first two courses present', () => {
    
    it("is expected to see Work The Web course section", () => {
      cy.get("[data-cy=course-section-1]").within(() => {
        cy.get("[data-cy=course-header-1]").should("contain.text", "Work The Web");
        cy.get("[data-cy=course-description-1]").should("be.visible");
        cy.get("[data-cy=course-category-1]").should("contain.text", "Category: workshops");
        cy.get("[data-cy=course-instructors-1]").should("contain.text", "Instructors: Thomas Ochman, Emma-Maria Thalén");
        cy.get("[data-cy=course-info-1]").should("be.visible");
        cy.get("[data-cy=course-price-1]").should("contain.text", "Price: From 1 000 SEK - €100 (Contact us for details)");
      });
    });

    it("is expected to see Test Automation course section", () => {
      cy.get("[data-cy=course-section-2]").within(() => {
        cy.get("[data-cy=course-header-2]").should("contain.text", "Test Automation using Cypress");
        cy.get("[data-cy=course-description-2]").should("be.visible");
        cy.get("[data-cy=course-category-2]").should("contain.text", "Category: testing");
        cy.get("[data-cy=course-instructors-2]").should("contain.text", "Instructors: Thomas Ochman, Emma-Maria Thalé");
        cy.get("[data-cy=course-info-2]").should("be.visible");
        cy.get("[data-cy=course-price-2]").should("contain.text", "Price: 24 500 SEK - €2.450");
      });
    });

  });



});
/* global cy */

describe("Component level Check if it is rendered", () => {
  it("Should display the html", () => {
    cy.visit("http://localhost:3000/homepage_creator");

    cy.get('.TextDiv textarea[class="setText"]').type(
      "<div class='Profile'><label id='Name'>Kasi Viswanath Vandanapu</label>\n<div><a href='https://github.com/kasivisu4'> Github</a>\n</div><hr>\n</div>"
    );

    cy.get(".Profile label#Name").contains("Kasi Viswanath Vandanapu");
    cy.get(".Profile ").contains("Github");
  });

  it("Create 2 div and check if the page is rendered correctly", () => {
    cy.visit("http://localhost:3000/homepage_creator");

    cy.get('.TextDiv textarea[class="setText"]').type(
      "<div class='Profile'><label id='Name'>Kasi Viswanath Vandanapu</label>\n<div><a href='https://github.com/kasivisu4'> Github</a>\n</div><hr>\n</div>"
    );

    cy.get(".Profile label#Name").contains("Kasi Viswanath Vandanapu");

    cy.get(".xAxis button[class='columnButton']").click();

    cy.get("select#Component_selection").select("0,1");

    cy.get('.TextDiv textarea[class="setText"]').type(
      "<label id='text'>I Like PDP!!</label>"
    );

    cy.get(".RenderComponentDiv label#text").contains("I Like PDP");
  });

  it("Create 2 div with CSS and check if the User Home page is rendered correctly", () => {
    cy.visit("http://localhost:3000/homepage_creator");

    cy.get('.App input[class="customURLInput"]').type("test1");

    cy.get(".xAxis button[class='columnButton']").click();

    cy.get(".CreateBlueprint button[class='add_components']").click();

    cy.get(".CreateBlueprint button[class='add_components']").click();

    cy.get('.TextDiv textarea[class="setText"]').type(
      "<div class='Profile'><label id='Name'>Kasi Viswanath Vandanapu</label>\n<div><a href='https://github.com/kasivisu4'> Github</a>\n</div>\n</div>"
    );

    cy.get(".Profile label#Name").contains("Kasi Viswanath Vandanapu");

    cy.get("select#Component_selection").select("0,1");

    cy.get('.TextDiv textarea[class="setText"]').type(
      "<div class='contact'> Contact: +1(341) - 356 - 1768</div>"
    );

    cy.get(".contact").contains("+1(341) - 356 - 1768");

    cy.get("select#Component_selection").select("1,0");

    cy.get("select[class='language_selection']").select("css");

    cy.get('.TextDiv textarea[class="setText"]').type("textAlign:'right'");

    cy.get("select[class='language_selection']").select("html");

    cy.get('.TextDiv textarea[class="setText"]').type("<hr>");

    cy.get("select#Component_selection").select("2,0");
    cy.get('.TextDiv textarea[class="setText"]').type(
      "<label id='text'>I Like PDP!!</label>"
    );

    cy.get(".RenderComponentDiv label#text").contains("I Like PDP");

    cy.get("select[class='language_selection']").select("css");

    cy.get('.TextDiv textarea[class="setText"]').type(
      "fontSize:'100px',color:'Red'"
    );
  });
});

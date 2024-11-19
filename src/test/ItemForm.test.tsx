import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ItemForm from "../pages/Home/ItemForm";
import userEvent from "@testing-library/user-event";

describe("<ItemForm/>", () => {
  test("should add itmes and remove them", async () => {
    const user = userEvent.setup(); //inicializamos teniendo un user

    render(<ItemForm />);

    //buscar el input
    const input = screen.getByRole("textbox");
    expect(input).toBeDefined();

    //buscar el form
    const form = screen.getByRole("form");
    expect(form).toBeDefined();

    //dentro del form buscar el button
    const button = screen.getByRole("button", { name: /Add Item/i });
    expect(button).toBeDefined();

    //escirbir en el input

    await user.type(input, "Lichu");
    await user.click(button!);

    //asegurar que el elemento sea agregado
    const list = screen.getByRole("list");
    expect(list).toBeDefined();
    expect(list.childNodes.length).toBe(1);

    //asegurarnos que lo podemos borrar
    const removeButton = screen.getByRole("button", { name: /Lichu/i });
    expect(removeButton).toBeDefined();

    await user.click(removeButton!);
    const noResults = screen.getByText("Debes agregar un item")
    expect(noResults).toBeDefined()
    screen.debug();
  });
});

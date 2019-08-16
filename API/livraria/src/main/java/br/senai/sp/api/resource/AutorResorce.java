package br.senai.sp.api.resource;

import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.senai.sp.api.model.Autor;
import br.senai.sp.api.repository.AutorRepository;

@RestController
@RequestMapping("/autores")
public class AutorResorce {

	@Autowired
	private AutorRepository autorRepository;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping
	private List<Autor> getAutor(){
		return autorRepository.findAll();
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/{id}")
	private Autor visualizarAutor(@PathVariable Long id) {
		return autorRepository.findById(id).get();
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping
	private List<Autor> cadastrarFabricante (@Validated @RequestBody Autor autor) {
		autorRepository.save(autor);
		return autorRepository.findAll();
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PutMapping("/{id}")
	private ResponseEntity<Autor> atualizarAutor(@RequestBody Autor autor, @PathVariable Long id){
		Autor autorSalvo = autorRepository.findById(id).get();
		
		BeanUtils.copyProperties(autor, autorSalvo, "id");
		
		autorRepository.save(autor);
		
		return ResponseEntity.ok(autor);
	}
	
}
